# Medisync
A React Native Django Arduino Project

---

## Install React Native
                nvm install 18.1.0
                nvm use 18.1.0

                npx create-expo-app medisyncApp
                cd medisyncApp
                
                npx expo install react-native-ble-plx @config-plugins/react-native-ble-plx expo-device react-native-base64

                npx expo install expo-camera

                npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-vector-icons
                
                npm install expo-secure-store@12.3.1

                npm install eas-cli 

                npx expo prebuild

                npx expo start

Remember change Django server address to In ```medisyncApp > src > components > globalContext.js```

Debugging 

                npm install
                npm audit fix
                npm cache clean --force
                npx expo install --fix
                npx @react-native-community/cli doctor                
                
                cd android
                ./gradlew clean
                cd ..

Export app
                npx cross-env EAS_NO_VCS=1 eas build --profile development --platform android
                npx cross-env EAS_NO_VCS=1 eas build --profile development --platform ios

## Install Django
                cd medisyncBackend

                conda update conda
                conda config --add channels conda-forge
                conda config --set channel_priority strict
                conda config --set auto_activate_base false
                conda create --name medisync python=3.9
                conda activate medisync

                pip install django djangorestframework djangorestframework-jwt django-cors-headers 

                pip install opencv-python opencv-contrib-python scikit-image 

                python manage.py runserver 

## Hardware
### Arduino Nano 33 BLE
Upload ```medisyncHardware.ino```


  