from machine import Pin, ADC
import time
import dht

# Pin Definitions
RelayVentilation = Pin(3, Pin.OUT)  # Ventilation system
RelayCooling = Pin(5, Pin.OUT)     # Cooling system for high temperatures
RelayAlert = Pin(6, Pin.OUT)       # Extreme climate condition alert
HumidityTemperatureSensor = dht.DHT22(Pin(4))  # Temperature and humidity
TemperatureAirSensor = ADC(27)     # External temperature sensor

# Functions to convert sensor values
def adc_to_percentage(adc_value):
    return (adc_value * 100) / 65536

def adc_to_temperature(adc_value):
    return (adc_value / 65536) * 50  # Calibrated for a range of 0-50°C

while True:
    # Sensor Readings
    HumidityTemperatureSensor.measure()
    AirTemperature = HumidityTemperatureSensor.temperature()  # °C
    AirHumidity = HumidityTemperatureSensor.humidity()        # %
    ExternalTemperature = adc_to_temperature(TemperatureAirSensor.read_u16())  # °C

    # Display Sensor Values
    print("🌍 Climate Simulation Project: Environmental Conditions")
    print("-------------------------------------------------------")
    print(f"Air Temperature: {AirTemperature:.2f} °C")
    print(f"Air Humidity: {AirHumidity:.2f} %")
    print(f"External Temperature: {ExternalTemperature:.2f} °C")
    print()

    # Simulated Climate Impacts and Actions
    # 1. Temperature Effects
    if ExternalTemperature > 35:  # Heatwave simulation
        RelayCooling.on()  # Cooling system active
        print("⚠️ Impact: Global Warming - High temperatures contributing to heatwaves.")
        print("🌟 Suggestion: Reduce fossil fuel use, adopt renewable energy sources, and plant trees to combat heatwaves.")
    elif ExternalTemperature > 30:
        print("⚠️ Impact: Rising temperatures - Increased energy demand for cooling systems.")
        print("🌟 Suggestion: Improve energy efficiency in buildings and switch to sustainable cooling methods.")
    else:
        RelayCooling.off()
        print("✅ Temperature is within a safe range.")
        print("🌟 Suggestion: Encourage practices that stabilize the climate, like afforestation.")

    # 2. Humidity Effects
    if AirHumidity < 30:  # Low humidity simulation
        RelayVentilation.on()  # Ventilation active
        print("⚠️ Impact: Dry Climate - Risk of drought and reduced agricultural yield.")
        print("🌟 Suggestion: Promote water conservation, rainwater harvesting, and irrigation efficiency.")
    elif AirHumidity > 70:  # High humidity simulation
        RelayVentilation.on()
        print("⚠️ Impact: Excess Moisture - Increased risk of mold, pests, and flooding.")
        print("🌟 Suggestion: Improve drainage systems and ensure proper water management.")
    else:
        RelayVentilation.off()
        print("✅ Humidity is within an optimal range.")
        print("🌟 Suggestion: Support sustainable water use to maintain balance.")

    # 3. Extreme Climate Alerts
    if ExternalTemperature > 40 or AirTemperature > 40:  # Extreme conditions
        RelayAlert.on()
        print("🚨 Climate Alert: Dangerously high temperatures!")
        print("⚠️ Impact: Severe heat can cause loss of biodiversity and health hazards.")
        print("🌟 Suggestion: Urgent need to reduce greenhouse gas emissions and implement cooling shelters.")
    else:
        RelayAlert.off()
        print("✅ No extreme climate alerts. Conditions are stable.")
        print("🌟 Suggestion: Focus on climate resilience strategies to mitigate future risks.")

    print("-------------------------------------------------------\n")
    time.sleep(2)  # Delay for 2 seconds
