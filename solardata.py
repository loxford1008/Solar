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

# Author: Tony DiCola
# License: Public Domain
import time

# Import SPI library (for hardware SPI) and MCP3008 library.
import Adafruit_GPIO.SPI as SPI
import Adafruit_MCP3008


# Hardware SPI configuration:
SPI_PORT   = 0
SPI_DEVICE = 0
mcp = Adafruit_MCP3008.MCP3008(spi=SPI.SpiDev(SPI_PORT, SPI_DEVICE))




try:
    print('Reading MCP3008 values, press Ctrl-C to quit...')
    # Print nice channel column headers.
    # Main program loop.
    while True:
        # Read all the ADC channel values in a list.
        values = [0]*8
        sol = mcp.read_adc(3)
        amp = sol/


        data.child("values").update({"Voltage": sol})

        print(sol)

        # Pause for 10 seconds
        time.sleep(10)
except(KeyboardInterrupt, SystemExit):
    print("\nExit")
except:
    print("Error")


'''
try:
    print('Reading MCP3008 values, press Ctrl-C to quit...')
    # Print nice channel column headers.
    print('| {0:>4} | {1:>4} | {2:>4} | {3:>4} | {4:>4} | {5:>4} | {6:>4} | {7:$
    print('-' * 57)
    # Main program loop.
    while True:
        # Read all the ADC channel values in a list.
        values = [0]*8
         for i in range(8):
            # The read_adc function will get the value of the specified channel$
            values[i] = mcp.read_adc(i)
        # Print the ADC values.
        print('| {0:>4} | {1:>4} | {2:>4} | {3:>4} | {4:>4} | {5:>4} | {6:>4} |$
        # Pause for half a second.
        time.sleep(0.5)
except(KeyboardInterrupt, SystemExit):
    print("\nExit")
except:
    print("Error")
'''
