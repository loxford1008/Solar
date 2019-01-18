# Author: Boss Bitch adapted from Tony
# License: Public Domain

import pyrebase

config = {
    "apiKey": "AIzaSyCmODvamnVf-R6enIcMo5gW4qjMWarSZUQ",
    "authDomain": "home-test-fadc8.firebaseapp.com",
    "databaseURL": "https://home-test-fadc8.firebaseio.com",
    "projectId": "home-test-fadc8",
    "storageBucket": "home-test-fadc8.appspot.com",
    "messagingSenderId": "524364239854"
}

firebase = pyrebase.initialize_app(config)

data = firebase.database()

#data.child("values").update({"channel1": 24})


import time

# Import SPI library (for hardware SPI) and MCP3008 library.
import Adafruit_GPIO.SPI as SPI
import Adafruit_MCP3008


# Hardware SPI configuration:
SPI_PORT   = 0
SPI_DEVICE = 0
mcp = Adafruit_MCP3008.MCP3008(spi=SPI.SpiDev(SPI_PORT, SPI_DEVICE))

#config
resistance = 1000
voltage = 3.3
scale = voltage/1024
number = 0


try:
    print('Reading MCP3008 values, press Ctrl-C to quit...')
    # Print nice channel column headers.
    # Main program loop.
    while True:
        # Read all the ADC channel values in a list.
        #values = [0]*8
        sol = mcp.read_adc(3)

        #conversions
        volt = round(sol * scale, 3)
        amp = round((sol*scale)/resistance, 10)
        mamp = round((volt/resistance)*resistance, 3)
        watt = round(volt*mamp, 3)


        #firebase database push
        data.child("values").update({"Voltage": volt})
        data.child("values").update({"Amps": amp})
        data.child("values").update({"mA": mamp})
        data.child("values").update({"Watts": watt})
        data.child("table").set({str(number): volt})

        print(sol, " | ", volt, " | ", mamp," | ", watt," | ")

        # Pause for 10 seconds
        time.sleep(10)

        #increment index
        number+= 1
except(KeyboardInterrupt, SystemExit):
    print("\nExit")
except:
    print("Error")
