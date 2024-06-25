espeak-ng - A multi-lingual software speech synthesizer.
SYNOPSIS
espeak-ng [] []

DESCRIPTION
espeak-ng is a software speech synthesizer for English, and some other languages.

OPTIONS
-h, --help: Show summary of options.


#
Ubuntu espeak 是一个用于英语（和其他几种语言）的语音合成器，它将文本转换为语音。

您可以直接在您的 Ubuntu 机器上执行 espeak 命令，无需任何安装或配置。

在本文中，让我们了解一下 espeak 命令的 8 个示例。



espeak 示例 1：说出命令行中指定的单词
这是默认用法。

# espeak --stdout 'words to speak' | aplay
注意：上面还可能显示以下消息：“Playing WAVE 'stdin' : Signed 16 bit Little Endian, Rate 22050 Hz, Mono”


espeak 示例 2：说出标准输入中指定的单词
这将从标准输入交互地获取单词并将其转换为语音。

# espeak --stdout | aplay
espeak 示例 3：说出您的文档
这会将文本从 mydocument.txt 转换为语音。

# espeak --stdout -t mydocument.txt | aplay
espeak 示例 4：从文本文档生成语音文件
将您的文本文件转换为音频文件，如下所示。

# espeak -t mydocument.txt -w myaudio.wav
自定义 espeak
如果您发现默认的语音合成效果不好，您可以尝试按照下面的说明进行自定义。

espeak 示例 5：列出所有可用的语音语言
# espeak --voices
Pty Language Age/Gender VoiceName       File        Other Langs
 5  af             M  afrikaans         af
 5  bs             M  bosnian           bs
 5  ca             M  catalan           ca
 5  cs             M  czech             cs
 5  cy             M  welsh-test        cy
 5  de             M  german            de
 5  el             M  greek             el
 5  en             M  default           default
 5  en-sc          M  en-scottish       en/en-sc    (en 4)
.......
espeak 示例 6：选择不同的语音语言
下面将使用“en-uk”——英式英语将文本翻译成语音。

# espeak -v en-uk --stdout 'reading tips & tricks in TGS' | aplay
espeak 示例 7：增加或减少每分钟的口语数量。
默认值为每分钟 160 个字。您可以使用选项 -s 减少它，如下所示。

# espeak -s 140 -f mydocument.txt | aplay
espeak 示例 8：列出特定语言中可用的 espeak 语音
以下示例将显示可用于文本到语音转换的所有可能的英语变体。

# espeak --voice=en
Pty Language Age/Gender VoiceName       File        Other Langs
 2  en-uk          M  english           en/en       (en 2)
 3  en-uk          M  english-mb-en1    mb/mb-en1   (en 2)
 2  en-us          M  english-us        en/en-us    (en-r 5)(en 3)
 5  en-sc          M  en-scottish       en/en-sc    (en 4)
 5  en             M  default           default