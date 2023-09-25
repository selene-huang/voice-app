# Voice App

This project is designed and developed by researchers affiliated with the Berkeley Speech Group. Our aims are:

1. To offer training exercises for voice therapy
2. To collect a large-scale dataset of transgender and gender non-conforming individuals’ voices for research purposes only
3. To track individuals' progress throughout voice therapy sessions for research purposes only

# Getting Started

### Prerequisites

You'll need `npm` and `node`. To check your version, run:

```sh
node -v
npm -v
```

in your terminal.

To install Node, use a Node version manager like [nvm](https://github.com/nvm-sh/nvm) (for Mac) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (for Windows) to install Node.js and npm. See [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Installation

To clone the repo & install dependencies:

   1. Clone this repo
      * using SSH (recommended)
         ```sh
         git clone git@github.com:selene-huang/voice-app.git
         ```
      * using HTTPS
         ```sh
         git clone https://github.com/selene-huang/voice-app.git
         ```
   2. Enter the cloned directory
        ```sh
        cd voice-app
        ```
   3. Install project dependencies. This command installs all packages from [`package.json`](package.json).
      ```sh
      npm install
      ```

We recommend opening this project in VSCode for development.

**Helpful resources**
* [GitHub: Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository)
* [GitHub: Generating SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)


### Running the app

1. In the project directory, run:
   ```shell
    npx expo start
   ```
2. There are several ways to test the app:
     - **Expo Go (Recommended)**: [download Expo Go](https://docs.expo.dev/get-started/installation/#2-expo-go-app-for-android-and) on your phone, **connect to same network as your laptop**, and use your phone camera to scan the QR code displayed in the command line.
     -  Web: typing `w` into the expo command line opens the app in a web view. 
        -  Warning: since the app is designed to be used on a mobile app, web compatibility might be limited, and some functionality might be different when using the web setup.