Import:
    mongoimport --db DB_NAME --collection COLLECTION_NAME --file FILE_NAME

    mongoimport --db ask-apiko-api --collection users --file users.json
    mongoimport --db ask-apiko-api --collection questions --file questions.json

Export:
    mongoexport --db DB_NAME --collection COLLECTION_NAME --out FILE_NAME

    mongoexport --db ask-apiko-api --collection users --out users.json
    mongoexport --db ask-apiko-api --collection questions --out questions.json