# Prepare the Database

Do the following as root

```sql
create database apollowebdb;
create user client identified by 'pass';
use apollowebdb;
grant all privileges on apollowebdb to client;
grant all privileges on apollowebdb.* to client;
```