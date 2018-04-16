#!/bin/sh

PWD=$(pwd)

java -classpath ${PWD}/cuba/lib/hsqldb-2.2.9.jar  org.hsqldb.Server -database.0 ${PWD}/cuba/db/cuba -dbname.0 cuba -database.1 ${PWD}/cuba/db/wsprintermanager -dbname.1 wsprintermanager
