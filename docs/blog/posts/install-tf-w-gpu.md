---
draft: true
date:
    created: 2024-10-06
categories:
  - tensorflow
  - gpu
tags:
  - tensorflow
  - gpu
  - cuda
  - nvidia
  - legacy
  - linux
comments: true
---

# How to install TensorFlow with GPU


## Identify your resources

Check which GPU you have in your system. You can do this by running the following command:

```bash
lspci | grep -i nvidia
```

Then, search in nvidia site for the CUDA version that is compatible with your GPU. You can find this information in the [CUDA GPUs](https://developer.nvidia.com/cuda-gpus) page.

Then, check your nvidia-driver version by running the following command:

```bash
nvidia-smi
```
It will show something like this:

```
+---------------------------------------------------------------------------------------+
| NVIDIA-SMI 535.183.01             Driver Version: 535.183.01   CUDA Version: 12.2     |
|-----------------------------------------+----------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |
|                                         |                      |               MIG M. |
|=========================================+======================+======================|
|   0  NVIDIA GeForce GTX 1660 ...    Off | 00000000:01:00.0  On |                  N/A |
| 34%   35C    P8              12W / 125W |    738MiB /  6144MiB |      7%      Default |
|                                         |                      |                  N/A |
+-----------------------------------------+----------------------+----------------------+

```
The `CUDA Version: 12.2` is not your current CUDA version, but the latest version that is compatible with your driver. You can check the compatibility in the [CUDA Toolkit Archive](https://developer.nvidia.com/cuda-toolkit-archive).

## Install CUDA

You also can check which cuda versions are installed by executing the command below:

```bash
ls -d /usr/local/cuda-*
```

or with:

```bash
nvcc --version
```

Steps:

1. First find cuda version in the [Cuda toolkit Archive](https://developer.nvidia.com/cuda-toolkit-archive)
2. Find Cuda compatibility [1. CUDA 12.5 Release Notes](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#id4)
3. Find Cuda dependencies:
  - [CUDA Compilers · GitHub](https://gist.github.com/ax3l/9489132)
  - [CUDA incompatible with my gcc version - Stack Overflow](https://stackoverflow.com/a/46380601)


Using the following lines in your .bashrc or .zshrc you can enable the cuda version you want:

```bash
export LD_LIBRARY_PATH="/usr/local/cuda-10.1/lib64:$LD_LIBRARY_PATH"
export LD_LIBRARY_PATH="/usr/local/cuda-10.1/include/:$LD_LIBRARY_PATH"
export LD_LIBRARY_PATH="/usr/local/cuda-10.1/extras/CUPTI/lib64/:$LD_LIBRARY_PATH"
export PATH="$PATH:/usr/local/cuda-10.1/bin"
```

## Install TensorFlow

Check in tf site the version that is compatible with your CUDA version. You can find this information in the [TensorFlow with GPU support](https://www.tensorflow.org/install/source#gpu) page.

Then, install TensorFlow with the following command:

If you are running older tensorflow versions, you can install it with the following command:

```bash
pip install tensorflow-gpu==2.3.0
```

otherwise, you can install the latest version with the following command:

```bash
pip install tensorflow[and-cuda]
```

Check if the installation was successful by running the following command:

```bash
python -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```

From [tensorflow site](https://www.tensorflow.org/install/pip#system_requirements), if previous command did not work, you can try the following command:

```bash
pushd $(dirname $(python -c 'print(__import__("tensorflow").__file__)'))
ln -svf ../nvidia/*/lib/*.so* .
popd
```
