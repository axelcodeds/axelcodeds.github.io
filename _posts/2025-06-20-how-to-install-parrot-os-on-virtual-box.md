---
title: "How to install parrot os on virtualbox"
date: 2025-06-20
categories: [Linux, Parrot OS, VirtualBox]
tags: [Parrot OS, VirtualBox, Installation]
---
Parrot OS is a versatile and powerful operating system designed for security professionals, developers, and privacy-conscious users. Installing it on VirtualBox allows you to run it in a virtual environment without affecting your main operating system. Here’s a step-by-step guide to help you install Parrot OS on VirtualBox.
## Prerequisites
1. **VirtualBox**: Ensure you have VirtualBox installed on your computer. You can download it from the [official VirtualBox website](https://www.virtualbox.org/).
2. **Parrot OS ISO**: Download the latest Parrot OS ISO file from the [official Parrot OS website](https://www.parrotsec.org/download/).
3. **Sufficient Resources**: Make sure your computer has enough RAM and disk space to run a virtual machine. At least 2 GB of RAM and 20 GB of disk space are recommended.
## Steps to Install Parrot OS on VirtualBox
### Step 1: Create a New Virtual Machine
1. Open VirtualBox and click on the "New" button.
2. Enter a name for your virtual machine (e.g., "Parrot OS").
3. Select "Linux" as the type and "Debian (64-bit)" as the version.
4. Click "Next" to proceed.
### Step 2: Allocate Memory
1. Choose the amount of RAM to allocate to the virtual machine. A minimum of 2 GB is recommended, but you can allocate more if your system allows it.
2. Click "Next" after selecting the desired amount of RAM.
### Step 3: Create a Virtual Hard Disk
1. Select "Create a virtual hard disk now" and click "Create".
2. Choose the hard disk file type. The default option (VDI) is usually fine.
3. Select "Dynamically allocated" to save disk space.
4. Set the size of the virtual hard disk. At least 20 GB is recommended.
5. Click "Create" to finish creating the virtual hard disk.
### Step 4: Configure the Virtual Machine
1. Select the newly created virtual machine and click on "Settings".
2. Go to the "System" tab and ensure that "Enable EFI (special OSes only)" is unchecked.
3. In the "Processor" tab, allocate at least 2 CPUs if your system supports it.
4. Go to the "Storage" tab, click on the empty optical drive, and then click on the disk icon to choose a virtual optical disk file.
5. Select the Parrot OS ISO file you downloaded earlier.
6. Click "OK" to save the settings.
### Step 5: Start the Virtual Machine
1. Select the Parrot OS virtual machine and click on "Start".
2. The virtual machine will boot from the ISO file. You will see the Parrot OS boot menu.
### Step 6: Install Parrot OS
1. Select "Install" from the boot menu.
2. Follow the on-screen instructions to set your language, location, and keyboard layout.
3. When prompted, choose the installation type. You can select "Guided - use entire disk" if you are okay with using the entire virtual hard disk.
4. Set up your user account and password when prompted.
5. Continue with the installation process, which will take a few minutes.
6. Once the installation is complete, you will be prompted to remove the installation media. Go to the "Devices" menu in VirtualBox and select "Optical Drives" > "Remove disk from virtual drive".
7. Click "Reboot" to restart the virtual machine.
### Step 7: Post-Installation
1. After rebooting, log in with the user account you created during installation.
2. You can now start using Parrot OS in VirtualBox.
3. It’s a good idea to update the system by opening a terminal and running:
   ```bash
   sudo apt update && sudo apt upgrade
   ```
## Conclusion
You have successfully installed Parrot OS on VirtualBox! This setup allows you to explore the features of Parrot OS without affecting your main operating system. You can now use it for security testing, development, or simply to enjoy a different Linux experience. If you encounter any issues, refer to the [Parrot OS documentation](https://docs.parrotsec.org/) for troubleshooting tips and additional information. Happy exploring!
## Additional Tips
- **Snapshots**: Consider taking snapshots of your virtual machine at various stages. This allows you to revert to a previous state if something goes wrong.
- **Shared Folders**: You can set up shared folders between your host and the virtual machine for easy file transfer. Go to the "Settings" of your VM, then "Shared Folders", and add a folder from your host system.
- **Guest Additions**: Install VirtualBox Guest Additions for better performance and additional features like shared clipboard and drag-and-drop functionality. You can do this by going to the "Devices" menu in the VM window and selecting "Insert Guest Additions CD image...". Follow the prompts to install it.
- **Network Configuration**: If you need internet access, ensure that the network adapter is set to "NAT" or "Bridged Adapter" in the VM settings under the "Network" tab.
- **Resources**: If you find Parrot OS running slowly, consider increasing the allocated RAM or CPU cores in the VM settings.
- **Security**: Always keep your Parrot OS updated to ensure you have the latest security patches and features. Use the terminal command mentioned above regularly.
- **Learning Resources**: Explore the Parrot OS community forums and documentation for tips, tricks, and support from other users.
- **VirtualBox Extensions**: Consider installing the VirtualBox Extension Pack for additional features like USB 2.0/3.0 support and improved video performance.
- **Backup**: Regularly back up your virtual machine files to avoid losing data in case of corruption or accidental deletion.
- **Customization**: Parrot OS is highly customizable. Explore the settings and themes to personalize your environment according to your preferences.
- **Virtual Machine Settings**: You can adjust the settings of your virtual machine at any time by right-clicking on the VM in VirtualBox and selecting "Settings". This allows you to change resources, network settings, and more.
- **Learning Curve**: If you are new to Parrot OS or Linux in general, take your time to learn the basics. There are many online resources, tutorials, and forums that can help you get started.