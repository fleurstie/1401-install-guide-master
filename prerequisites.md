# Getting started with This Driver

Before we can jump head first into making a :B:ased macOS system, we need to set a few ground rules.

## Prerequisites

1. <span style="color:red">_**[IMPORTANT]**_</span> Time and patience.
   * macOS hours are a lot shorter, but still. Have some patience, this is WIP, and things will go wrong and will take up half your day just to figure out why your system is stuck at booting.
2. <span style="color:red">_**[IMPORTANT]**_</span> **Atleast SOME knowledge of OpenCore/macOS, and how to use a computer atleast somewhat better than the average Joe**
   * This is not just <span style="color:red">[IMPORTANT]</span>, this is how you advance in life. This also includes the ability to read, because going straight to AI after seeing one log line that is **clearly outlined** in about 50 different places will make things very funny, for both you and the support staff..
3. <span style="color:red">_**[CRUCIAL]**_</span> A compatible GPU. (16+ series)
4. <span style="color:red">_**[CRUCIAL]**_</span> An **Ethernet connection** (or hardcoded itlwm values in your config.plist for Intel cards, or just native Wi-Fi if you're bougie enough.)
   * You must either have a physical Ethernet port, or a compatible macOS Ethernet dongle/adapter. In case you have a [compatible WiFi card](https://dortania.github.io/Wireless-Buyers-Guide/), you can also use that.
   * For people who can't use ethernet but have an Android phone, you can connect your Android phone to WiFi and then tether it using USB with [HoRNDIS](https://joshuawise.com/horndis#available_versions).
5. <span style="color:red">_**[CRUCIAL]**_</span> **Proper OS Installation:**
   * Be it:
     * macOS from your pre-existing OpenCore config
     * Windows 
     * Linux support is not currently there, but you might be able to leverage WINE or something.