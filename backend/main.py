from fastapi import FastAPI, HTTPException
from pymongo import MongoClient

app = FastAPI()

def test_mongodb_connection(uri="mongodb://localhost:27017/"):
    try:
        # Attempt to connect to the MongoDB server
        client = MongoClient(uri)
        
        # List all databases to confirm connection
        databases = client.list_database_names()
        
        print("Connection successful!")
        print("Databases available:", databases)
        
        # Close the connection
        client.close()
        
        return {"status": "success", "databases": databases}
    except Exception as e:
        print("Connection failed:", e)
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/test-mongodb")
async def test_mongodb_endpoint(uri: str = "mongodb+srv://nelodukasobe:wIeNcOyxtcP2MHyx@main.b6bhe.mongodb.net/?retryWrites=true&w=majority&appName=main"):
    result = test_mongodb_connection(uri)
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
