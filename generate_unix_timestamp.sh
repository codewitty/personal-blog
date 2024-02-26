#!/bin/bash

# Function to generate Unix timestamp
generate_unix_timestamp() {
    # Convert input date to UTC timestamp, assuming time is always 12:00:00 UTC
    local utc_timestamp=$(date -u -jf "%Y-%m-%d %H:%M:%S" "$1 12:00:00" "+%s")

    # Format Unix timestamp as per the provided format: 1710115200000
    local formatted_timestamp=$((utc_timestamp * 1000))
    
    echo $formatted_timestamp
}

# Usage: ./generate_unix_timestamp.sh "YYYY-MM-DD"
generate_unix_timestamp "$1"

