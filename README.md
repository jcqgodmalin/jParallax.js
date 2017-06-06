# jParallax.js

jParallax is just a simple parallax effect maker. No complicated **WTFs!!**, just
simply controlling your container's background image's position on scroll.

## Installation
Download the jParallax package and include it after jQuery.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="jParallax.js path here"></script>
```

## Usage
### Step 1: Adding a class to your container tag.
jParallax is very simple to use. Simply add a class `jparallax` to your element.

Example:
```
<div class="jparallax">
    <!--Some Contents Here-->
</div>
```
### Step 2: Use data attributes to assign the Background Image.
Use `data-image` attribute to assign a background image.

Example: *(Using the previous code...)*
```
<div class="jparallax" data-image="path/to/backgroundimagefile.jpg">
    <!--Some Contents Here-->
</div>
```

You're done! Just simple as that.

**NOTE**: Background Image is required. Also, by default, the container's `height` is
set to 'auto'. So if the parallax effect is not showing, maybe put some contents inside
it and another container below to see the effect.

## Options
You can pass options by using the data attributes.

To set the container's `height`:                                                                                                   `data-height="500px"`

To set the container's background image `speed` on scroll:
`data-speed="6"`

Currently available options:

| Name | Type | Default | Reuired |
| ----- | ----- | ----- | ----- |
| `image` | Path | null | **Yes** |
| `height` | number | auto | No |
| `speed` | float | 8 | No |

# License
MIT License

Copyright (c) 2017 Jhon Chrizel Godmalin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
