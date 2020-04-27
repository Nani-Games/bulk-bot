echo "Starting new instance..."
screen -dm -S bulkbot bash -c 'node app.js >> logfile.txt'
echo "Done!"
