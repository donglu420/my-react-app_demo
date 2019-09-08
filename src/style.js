import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`　
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

`;
export const IconFontStyle = createGlobalStyle`
	@font-face {
	  font-family: "iconfont";
	  src: url('./iconfont.eot?t=1564715670282'); /* IE9 */
	  src: url('./iconfont.eot?t=1564715670282#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARkAAsAAAAACNAAAAQYAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEcIQcATYCJAMUCwwABCAFhG0HRhumB8gOJa3AwGBgAFZgPPy7X3lf8jL7T2aBFShACa0jcGVVTSzMClfnAY2rMGzE/Dyb2vuQGmTzijMxrxswsQikNE5ounnYPNk8pRNxu8v/XE7vrvIA57farmMtGmtbAcY97wW2py+QNBwgJcoNYxeXcZpAt6EpdDklqwgCJW1SIJ4LBg0ExnSyJDMMwihnZYagadAMZSJ2DsB79/PxH1pHIChaBW3mzYfJeoj7FfwqH3f5XB7YCPD7s4BZR8UhkMTbXNtzuB88hOvS71TOA92gKL+CX7R/sfVVvs+HLFqRout/eFRFCmIEmmwaEc6Hkl/BJp3Kr/Z0Cr+20kn+5AvORdbQ+I4Z/ACICghrtypS0RaqBQYGk1XC1OqqYUFlRfuvw7VrRaiIRjdvsvINhokmuK7nswdu8I8AVTqjLiKMZK/eSgwxL6ynZi/pAT2IQ4T7ApJZVibcXeltq+B0Nek5ihDLGlqwskwwihfuLuvpWXXtp1p2JiKkz5xIQyg7d+3O7fXo3debGq+56Ose9qbM3HD3uuQuuCIXXvXkX3bR5a6aRV53CKPIoYUVnmCtooRWXEzd2am83OsN2VN3266aXuQlvKzL61bkCtLzd1+vXvdbOOKx8du2jcfiRmovxe1X/fuX+/skLv47Ktbsq/VYcIhPvdww6TJX2ae9dKOkey6NJWiF7jdVf7s7pOMdWyC/+ObWRoxQqR+ZGdf5WX9WOhse/Dei3ud6MfCfeoENO+hp2xthaEIOVA3/YjXCXz6cuDX97lz7jqihoWFkyNaIV+ltei/+WVIaPj47JTgnGWLvpeecMYjZ6WfFGRDLyHkzaoWiCBWCJV5BY4/coasWxcXBxGRnGV2F9nk3/u9SZDt8akH+24QmvbcUOA+1epiKEB0Q95r0L1Mb1E5/NZwFmPjqIZywy7UXPhwAA7b45/iOpx/wPQOqdP0eSKoAfgpnFVg0cSXUU/CG5Wrzf4VuaQYgWaGmbynWmPIXbdyaGzfRUXjrqglyLXrQj2MFhJYwsHwIxZR1qAabaBIOoRk7gpHBOegOpK4fWyLCRQYB+8YCCPM2QjHrK1TzzqNJuA/NqvcwMh84dPejxo5j2yEQiSKnkTg9pR1MCTqrhTeMEuFlFnCGUpNGjApdEsOJDsFDtWreMhlJ5Syc2Mcch9PQWpJ4ihetZioFnMeZTFbKJlpLOJ3UvFiSbJ1btODz7tRcZzUD4RIRR0PC0aNoDUYR6FhZ8HZ7CZF6fwGOQSkTDbGkocTL4IgchN4prTTXsgaaKrPUajiX/g5OBq1JJDwexxNZmVFSoIVj0oNWFFv+sBIcHUlzxS38Np21QK34urLm4yvM17gDOu2wFhjCkQr5IX/IdzbBgsVr1CcwsJmumNMZBQvqDQA=') format('woff2'),
	  url('./iconfont.woff?t=1564715670282') format('woff'),
	  url('./iconfont.ttf?t=1564715670282') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('./iconfont.svg?t=1564715670282#iconfont') format('svg'); /* iOS 4.1- */
}

	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
`;
