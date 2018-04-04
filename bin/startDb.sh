#!/bin/sh

PWD=$(pwd)

java -classpath ${PWD}/cuba/lib/hsqldb.jar  org.hsqldb.Server –database.0 testdb –dbname.0 testdbname