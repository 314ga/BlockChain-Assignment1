# How to make it work - assuming node.js is present in the PC

1.  Install bitcoin core

2.  Add to bitcoin.conf file(Windows located in /...Roaming/Bitcoin):
    regtest=1
    server=1
    rpcallowip=127.0.0.1
    rpcuser=jakubpiga
    rpcpassword=jakubpigapassword
    fallbackfee=0.000001

        [regtest]
        rpcport=4444

3.  In terminal folder ./bitcoin-api run "npm install"
4.  In terminal folder ./bitcoin-assignment1 run "npm install"
5.  In terminal folder ./bitcoin-api run server with command "npm run server"
6.  In terminal folder ./bitcoin-assignment1 run react app with command "npm start"

# Note

.env file should be in .gitignore (ignored for now)
