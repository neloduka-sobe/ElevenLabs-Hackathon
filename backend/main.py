from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, HttpUrl
from typing import List
import pandas as pd
import pymongo
from bson import ObjectId
import os
from urllib.parse import urljoin

# Initialize FastAPI app
app = FastAPI()

# Configure MongoDB connection
MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://nelodukasobe:wIeNcOyxtcP2MHyx@main.b6bhe.mongodb.net/?retryWrites=true&w=majority&appName=main")
client = pymongo.MongoClient(MONGO_URI)
db = client.datasources_db
collection = db.merged_data

# Pydantic model for request validation
class DataSourceRequest(BaseModel):
    urls: List[HttpUrl]

# Helper function to fetch and merge dataframes
async def fetch_and_merge_data(urls: List[HttpUrl]) -> pd.DataFrame:
    dataframes = []
    
    for url in urls:
        try:
            # Read data from URL - assuming CSV format
            # You might want to add more file format support based on your needs
            df = pd.read_csv(str(url))
            dataframes.append(df)
        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=f"Failed to fetch data from {url}: {str(e)}"
            )
    
    if not dataframes:
        raise HTTPException(
            status_code=400,
            detail="No valid data sources provided"
        )
    
    # Merge all dataframes
    # You might want to customize the merge strategy based on your needs
    merged_df = pd.concat(dataframes, ignore_index=True)
    return merged_df

@app.post("/merge", response_model=dict)
async def merge_datasources(request: DataSourceRequest):
    try:
        # Fetch and merge data
        merged_df = await fetch_and_merge_data(request.urls)
        
        # Convert DataFrame to dictionary for MongoDB storage
        data_dict = merged_df.to_dict(orient='records')
        
        # Store in MongoDB
        result = collection.insert_one({
            "data": data_dict,
            "source_urls": [str(url) for url in request.urls],
            "timestamp": pd.Timestamp.now()
        })
        
        # Construct the URL for accessing the merged data
        base_url = os.getenv("BASE_URL", "http://0.0.0.0:8000")
        access_url = urljoin(base_url, f"/serve/{result.inserted_id}")
        
        return {
            "message": "Data sources merged successfully",
            "database_id": str(result.inserted_id),
            "access_url": access_url
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to process data sources: {str(e)}"
        )

@app.get("/serve/{database_id}")
async def serve_data(database_id: str):
    try:
        # Validate ObjectId
        if not ObjectId.is_valid(database_id):
            raise HTTPException(
                status_code=400,
                detail="Invalid database ID"
            )
            
        # Fetch data from MongoDB
        result = collection.find_one({"_id": ObjectId(database_id)})
        
        if not result:
            raise HTTPException(
                status_code=404,
                detail="Database ID not found"
            )
            
        return {
            "data": result["data"],
            "source_urls": result["source_urls"],
            "timestamp": result["timestamp"]
        }
        
    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to retrieve data: {str(e)}"
        )

# Startup event to ensure MongoDB connection
@app.on_event("startup")
async def startup_event():
    try:
        # Ping MongoDB
        client.admin.command('ping')
        print("Successfully connected to MongoDB")
    except Exception as e:
        print(f"Failed to connect to MongoDB: {str(e)}")
        raise
