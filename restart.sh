echo "Stopping..."
screen -S bulkbot -X quit
echo "Stopped Bot..."
rm logfile.txt
echo "Starting new instance..."
screen -dm -S bulkbot bash -c 'node app.js >> logfile.txt'
echo "Done!"

