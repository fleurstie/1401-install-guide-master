# Hardware Limitations

This page is relatively short and sweet, because this isn't OpenCore, so we don't have to worry about 90% of our hardware. Buuut, it does have caveats, not everything is supported. You can check out the [Dortania OpenCore Guide](https://dortania.github.io/OpenCore-Install-Guide/macos-limits.html) to get an idea of if your config (apart from the GPU) is supported.
## CPU Support

Exact same as the regular OpenCore CPU support (for now), anything past Rocket Lake is going to be a bit painful, but that is not what this guide covers.

* Both Intel and AMD are supported.
* AMD Laptop CPUs are not supported by OpenCore, but others [have had success using them.](https://nullmothsystems.com/it-boots)

## GPU Support

::: tip

10-series cards and lower are not supported by this project at the moment. 16-series and 20-series are a bit buggy, but they do work.

:::

::: danger

If your laptop does not have MUX, please note the internal display will likely **not** work. You can, however, use an external monitor.

:::

Let's get into the nitty-gritty with what GPUs work and what doesn't, assuming this is desktops.

::: details NVIDIA GPU Support

Assuming this is a desktop system, with either an Intel or AyyyMD system:

| GPU Generation | macOS Support | Notes | 
| :--- | :--- | :--- | :--- | :--- |
| [Turing (16, 20 series)](https://en.wikipedia.org/wiki/Turing_(microarchitecture)) | 15.8.1 - 26| Buggiest of the bunch, personally. |
| [Ampere (30 series)](https://en.wikipedia.org/wiki/Ampere_(microarchitecture)) | 15.8.1 - 26| Verified working |
| [Ada Lovelace (40 series)](https://en.wikipedia.org/wiki/Ada_Lovelace_(microarchitecture)) | 15.8.1 - 26| Verified working |
| [Blackwell (50 series)](https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)) | 15.8.1 - 26 | Developer has a 50 series, least buggiest |

:::
Basically, if you don't like tables, every GPU from the 16 series to the 50 series is supported in one way or another by this driver. **This also includes any workstation equivalent GPU, for example Quadro cards.**

## Miscellaneous

* **iGPUs**
  * Currently in development, but hopefully will come Soon:tm:
* **NPUs**
  * Refer to the above, also in development.  This includes AMDs Ryzen AI stuff
* **AMD/Intel GPUs**
  * In progress, potentially future development push. 