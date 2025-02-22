```json
{
  "_id": ObjectId("auto-generated-by-mongodb"),
  "dataset_id": "unique-dataset-identifier", // Unique ID for the dataset
  "metadata": {
    "title": "Sample Dataset Title",
    "description": "This dataset contains information about...",
    "domain": "e-commerce", // Domain or industry
    "source": "Kaggle", // Source of the dataset
    "license": {
      "type": "CC BY 4.0", // License type
      "restrictions": "Non-commercial use only", // Any restrictions
      "acquisition_process": "Contact provider at license@example.com", // How to acquire the license
      "deep_web": false // Indicates if the dataset is from the deep web
    },
    "creation_date": "2023-10-01", // When the dataset was created
    "update_frequency": "monthly", // How often the dataset is updated
    "version": "1.2.0", // Version of the dataset
    "provenance": {
      "creator": "John Doe", // Who created the dataset
      "transformations": "Cleaned and normalized", // Any transformations applied
      "lineage": "Derived from dataset XYZ" // Source or lineage of the dataset
    }
  },
  "structural_info": {
    "schema": [
      {
        "column_name": "user_id",
        "data_type": "integer",
        "description": "Unique identifier for users"
      },
      {
        "column_name": "purchase_amount",
        "data_type": "float",
        "description": "Amount spent in USD"
      }
    ],
    "size": {
      "rows": 100000,
      "columns": 10,
      "file_size": "250MB"
    },
    "format": "CSV", // File format
    "hierarchy": "flat" // Indicates if the dataset is nested or hierarchical
  },
  "temporal_info": {
    "time_range": {
      "start": "2020-01-01",
      "end": "2023-01-01"
    },
    "geographic_coverage": "Global" // Geographic scope of the dataset
  },
  "quality_indicators": {
    "completeness": 0.95, // Percentage of non-missing values
    "accuracy": "high", // Subjective or calculated accuracy
    "consistency": "consistent", // Whether data follows expected patterns
    "outliers": "present", // Presence of outliers
    "bias": "low", // Known biases in the dataset
    "cleaning_requirements": [
      {
        "column": "age",
        "issue": "missing_values",
        "action": "impute_with_mean"
      },
      {
        "column": "purchase_amount",
        "issue": "outliers",
        "action": "remove_outliers"
      }
    ]
  },
  "usage_info": {
    "usage_statistics": {
      "downloads": 1500,
      "last_accessed": "2023-10-15"
    },
    "citations": [
      {
        "paper_title": "A Study on E-Commerce Trends",
        "author": "Jane Smith",
        "year": 2022
      }
    ],
    "user_ratings": {
      "average_rating": 4.5,
      "total_ratings": 120
    }
  },
  "ai_ml_relevance": {
    "suitable_tasks": ["classification", "regression"], // Suitable ML tasks
    "features": ["user_id", "purchase_amount"], // Key features for modeling
    "labels": ["churn"], // Target variable(s)
    "related_datasets": ["dataset-xyz", "dataset-abc"] // Related datasets
  },
  "preview": {
    "sample_data": [
      {
        "user_id": 1,
        "purchase_amount": 50.0
      },
      {
        "user_id": 2,
        "purchase_amount": 120.0
      }
    ],
    "summary_statistics": {
      "user_id": {
        "type": "integer",
        "min": 1,
        "max": 100000,
        "missing_values": 0
      },
      "purchase_amount": {
        "type": "float",
        "mean": 75.0,
        "std_dev": 25.0,
        "missing_values": 5
      }
    }
  },
  "download_info": {
    "access_method": "API", // How to access the dataset (API, direct download, etc.)
    "download_url": "https://example.com/dataset/download", // URL to download the dataset
    "authentication_required": true, // Whether authentication is needed
    "authentication_details": {
      "api_key": "your-api-key", // API key or credentials
      "endpoint": "https://example.com/api/v1/dataset"
    },
    "file_format": "CSV", // Format of the downloadable file
    "file_size": "250MB", // Size of the downloadable file
    "instructions": "Use the provided API key to download the dataset via the endpoint."
  }
}
```
