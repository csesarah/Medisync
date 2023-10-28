#include <ArduinoBLE.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

long previousMillis = 0;

Adafruit_BME280 bme;

String readData() {
    Serial.print(("T,"+String(bme.readTemperature())+",H,"+String(bme.readHumidity())+"\t\r\n").c_str());
    return ("T,"+String(bme.readTemperature())+",H,"+String(bme.readHumidity())+"\t\r\n").c_str();
}

BLEService sensorService("180C");  // User defined service

BLEStringCharacteristic sensorCharacteristic("2A56",  // standard 16-bit characteristic UUID
    BLERead, 13); // remote clients will only be able to read this

void setup() {
    Serial.begin(9600);    // initialize serial communication
    while (!Serial);

    pinMode(LED_BUILTIN, OUTPUT); // initialize the built-in LED pin

    bool status;

    status = bme.begin(0x76);  
    if (!status) {
      Serial.println("Could not find a valid BME280 sensor, check wiring!");
      while (1);
    } else {
      Serial.println("BME280 sensor initialized");
    }

    if (!BLE.begin()) {   // initialize BLE
        Serial.println("starting BLE failed!");
        while (1);
    }

    BLE.setLocalName("Medisync");  // Set name for connection
    BLE.setAdvertisedService(sensorService); // Advertise service
    sensorService.addCharacteristic(sensorCharacteristic); // Add characteristic to service
    BLE.addService(sensorService); // Add service

    BLE.advertise();  // Start advertising
    Serial.print("Peripheral device MAC: ");
    Serial.println(BLE.address());
    Serial.println("Waiting for connections...");
}

void loop() {
  BLEDevice central = BLE.central();  // Wait for a BLE central to connect

  // if a central is connected to the peripheral:
  if (central) {
    Serial.print("Connected to central MAC: ");
    // print the central's BT address:
    Serial.println(central.address());  

    // turn on the LED to indicate the connection:
    digitalWrite(LED_BUILTIN, HIGH);
    
    // keep looping while connected
    while (central.connected()){
      long currentMillis = millis();
      if (currentMillis - previousMillis >= 100) {
        previousMillis = currentMillis;
        String sensor = readData();
        sensorCharacteristic.writeValue(sensor); // Set sensor string
        Serial.println(sensor);
      }
    } 
    
    // when the central disconnects, turn off the LED:
    digitalWrite(LED_BUILTIN, LOW);
    Serial.print("Disconnected from central MAC: ");
    Serial.println(central.address());
  }
}