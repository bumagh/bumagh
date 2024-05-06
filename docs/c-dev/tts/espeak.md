espeak-ng - A multi-lingual software speech synthesizer.
SYNOPSIS
espeak-ng [] []

DESCRIPTION
espeak-ng is a software speech synthesizer for English, and some other languages.

OPTIONS
-h, --help: Show summary of options.

--version: Prints the espeak library version and the location of the espeak voice data.

-f <text file>: Text file to speak.

--stdin: Read text input from stdin till to the end of a stream at once.

If neither -f nor --stdin are provided, then <words> from parameter are spoken, or text is spoken from stdin, read separately one line by line at a time.

-d <device>: Use the specified device to speak the audio on. If not specified, the default audio device is used.

-q: Quiet, don't produce any speech (may be useful with -x).

-a <integer>: Amplitude, 0 to 200, default is 100.

-g <integer>: Word gap. Pause between words, units of 10ms at the default speed.

-k <integer>: Indicate capital letters with: 1=sound, 2=the word "capitals", higher values = a pitch increase (try -k20).

-l <integer>: Line length. If not zero (which is the default), consider lines less than this length as end-of-clause.

-p <integer>: Pitch adjustment, 0 to 99, default is 50.

-s <integer>: Speed in words per minute, default is 175.

-v <voice name>: Use voice file of this name from espeak-ng-data/voices. A variant can be specified using +, such as af+m3.

-w <wave file name>: Write output to this WAV file, rather than speaking it directly.

--split=<minutes>: Used with -w to split the audio output into <minutes> recorded chunks.

-b: Input text encoding, 1=UTF8, 2=8 bit, 4=16 bit.

-m: Indicates that the text contains SSML (Speech Synthesis Markup Language) tags or other XML tags. Those SSML tags which are supported are interpreted. Other tags, including HTML, are ignored, except that some HTML tags such as <hr> <h2> and <li> ensure a break in the speech.

-x: Write phoneme mnemonics to stdout.

-X: Write phonemes mnemonics and translation trace to stdout. If rules files have been built with --compile=debug, line numbers will also be displayed.

-z: No final sentence pause at the end of the text.

--stdout: Write speech output to stdout.

--compile=voicename: Compile the pronunciation rules and dictionary in the current directory. =<voicename< is optional and specifies which language is compiled.

--compile-debug=voicename: Compile the pronunciation rules and dictionary in the current directory as above, but include line numbers, that get shown when -X is used.

--ipa: Write phonemes to stdout using International Phonetic Alphabet. --ipa=1 Use ties, --ipa=2 Use ZWJ, --ipa=3 Separate with _.

--tie=<character>: The character to use to join multi-letter phonemes in -x and --ipa output.

--path=<path>: Specifies the directory containing the espeak-ng-data directory.

--pho: Write mbrola phoneme data (.pho) to stdout or to the file in --phonout.

--phonout=<filename>: Write output from -x -X commands and mbrola phoneme data to this file.

--punct="<characters>": Speak the names of punctuation characters during speaking. If =<characters> is omitted, all punctuation is spoken.

--sep=<character>: The character to separate phonemes from the -x and --ipa output.

--voices[=<language code>]: Lists the available voices. If =<language code> is present then only those voices which are suitable for that language are listed. If xx-yy language code is passed, then voices with yy of xx language variants are shown with higher priority than just xx. If variant is passed, then all voice variants are shown. If mb or mbrola is passed, then all voices using the MBROLA voice synthesizer are shown. If all is passed, then all eSpeak NG voices, voice variants and MBROLA voices are shown.

--voices=<directory>: Lists the voices in the specified subdirectory.

EXAMPLES
espeak-ng "This is a test": Speak the sentence "This is a test" using the default English voice.

espeak-ng -f hello.txt: Speak the contents of hello.txt using the default English voice.

cat hello.txt | espeak-ng: Speak the contents of hello.txt using the default English voice.

espeak-ng -x hello: Speak the word "hello" using the default English voice, and print the phonemes that were spoken.

espeak-ng -ven-us "[[h@'loU]]": Speak the phonemes "h@'loU" using the American English voice.

espeak-ng --voices: List all voices supported by eSpeak.

espeak-ng --voices=en: List all voices that speak English (en).

espeak-ng --voices=mb: List all voices using the MBROLA voice synthesizer.

AUTHOR
eSpeak NG is maintained by Reece H. Dunn msclrhd@gmail.com. It is based on eSpeak by Jonathan Duddington jonsd@jsd.clara.co.uk.

This manual page is based on the eSpeak page written by Luke Yelavich themuso@ubuntu.com for the Ubuntu project.


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