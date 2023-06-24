"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/translate";
exports.ids = ["pages/api/translate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./src/pages/api/translate.ts":
/*!************************************!*\
  !*** ./src/pages/api/translate.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const sentence = req.body.sentence || \"\";\n    if (sentence.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please input the sentence\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createChatCompletion({\n            model: \"gpt-3.5-turbo-16k\",\n            // model: \"text-davinci-003\",\n            messages: generatePrompt(sentence),\n            max_tokens: 100,\n            temperature: 0.6\n        });\n        var result = completion.data.choices[0].message?.content;\n        console.log(result);\n        res.status(200).json({\n            result\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generatePrompt(sentence) {\n    const chatCompletionMessage = [\n        {\n            role: \"system\",\n            content: `You are a gibberish, profanity translator. You translate text from any language to Thai in a useless and profane, but funny manner. Here are some examples:\r\n      - All pronouns must be replaced with profane ones: I -> กู, you -> มึง or anything similar\r\n      - Each sentences must end with ไอเหี้ย, ไอสัส or anything similar.\r\n      - Try to be as useless as possible\r\n\r\n      Remember, also make the translation a bit shitty. Like, don't be accurate. \r\n    `\n        },\n        {\n            role: \"user\",\n            content: \"I love you\"\n        },\n        {\n            role: \"assistant\",\n            content: \"กุูรักมึงไอสัส\"\n        },\n        {\n            role: \"user\",\n            content: \"excuse me, where is the toilet?\"\n        },\n        {\n            role: \"assistant\",\n            content: \"เห้ย ห้องน้ำอยู่ไหนว่ะไอสัส\"\n        },\n        {\n            role: \"user\",\n            content: \"This dog has four legs\"\n        },\n        {\n            role: \"assistant\",\n            content: \"ไอ้หมาตัวนี้มีสีขาหว่ะไอเหี้ย\"\n        },\n        {\n            role: \"user\",\n            content: \"I have been having my eyes on you for a while\"\n        },\n        {\n            role: \"assistant\",\n            content: \"กูแอบชอบมึงมานานแล้ว ไอเหี้ย\"\n        },\n        {\n            role: \"user\",\n            content: sentence\n        }\n    ];\n    return chatCompletionMessage;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RyYW5zbGF0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFRbEQsTUFBTUUsZ0JBQWdCLElBQUlGLGlEQUFhQSxDQUFDO0lBQ3RDRyxRQUFRQyxRQUFRQyxJQUFJQztBQUN0QjtBQUNBLE1BQU1DLFNBQVMsSUFBSU4sNkNBQVNBLENBQUNDO0FBRTdCLDZCQUFlLDBDQUFnQk0sR0FBbUIsRUFDaERDLEdBQW9CO0lBRXBCLElBQUksQ0FBQ1AsY0FBY0MsUUFBUTtRQUN6Qk0sSUFBSUMsT0FBTyxLQUFLQyxLQUFLO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0Y7SUFFQSxNQUFNQyxXQUFtQk4sSUFBSU8sS0FBS0QsWUFBWTtJQUM5QyxJQUFJQSxTQUFTRSxPQUFPQyxXQUFXLEdBQUc7UUFDaENSLElBQUlDLE9BQU8sS0FBS0MsS0FBSztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGO0lBQ0EsSUFBSTtRQUNGLE1BQU1LLGFBQWEsTUFBTVgsT0FBT1kscUJBQXFCO1lBQ25EQyxPQUFPO1lBQ1AsNkJBQTZCO1lBQzdCQyxVQUFXQyxlQUFlUjtZQUMxQlMsWUFBWTtZQUNaQyxhQUFhO1FBQ2Y7UUFDQSxJQUFJQyxTQUFTUCxXQUFXUSxLQUFLQyxPQUFPLENBQUMsRUFBRSxDQUFDZCxTQUFTZTtRQUNqREMsUUFBUUMsSUFBSUw7UUFDWmhCLElBQUlDLE9BQU8sS0FBS0MsS0FBSztZQUFFYztRQUFPO0lBQ2hDLEVBQUUsT0FBT2IsT0FBWTtRQUNuQixnRUFBZ0U7UUFDaEUsSUFBSUEsTUFBTW1CLFVBQVU7WUFDbEJGLFFBQVFqQixNQUFNQSxNQUFNbUIsU0FBU3JCLFFBQVFFLE1BQU1tQixTQUFTTDtZQUNwRGpCLElBQUlDLE9BQU9FLE1BQU1tQixTQUFTckIsUUFBUUMsS0FBS0MsTUFBTW1CLFNBQVNMO1FBQ3hELE9BQU87WUFDTEcsUUFBUWpCLE1BQU0sQ0FBQywrQkFBK0IsRUFBRUEsTUFBTUMsUUFBUSxDQUFDO1lBQy9ESixJQUFJQyxPQUFPLEtBQUtDLEtBQUs7Z0JBQ25CQyxPQUFPO29CQUNMQyxTQUFTO2dCQUNYO1lBQ0Y7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxTQUFTUyxlQUFlUixRQUFnQjtJQUN0QyxNQUFNa0Isd0JBQWlEO1FBQ3JEO1lBQ0VDLE1BQU07WUFDTkwsU0FBUyxDQUFDOzs7Ozs7SUFNWixDQUFDO1FBQ0Q7UUFBRztZQUNESyxNQUFNO1lBQ05MLFNBQVM7UUFDWDtRQUNBO1lBQ0VLLE1BQU07WUFDTkwsU0FBUztRQUNYO1FBRUE7WUFDRUssTUFBTTtZQUNOTCxTQUFTO1FBQ1g7UUFDRTtZQUNBSyxNQUFNO1lBQ05MLFNBQVM7UUFDWDtRQUNFO1lBQ0FLLE1BQU07WUFDTkwsU0FBUztRQUNYO1FBRUE7WUFDRUssTUFBTTtZQUNOTCxTQUFTO1FBQ1g7UUFFQTtZQUNFSyxNQUFNO1lBQ05MLFNBQVM7UUFDWDtRQUNBO1lBQ0VLLE1BQU07WUFDTkwsU0FBUztRQUNYO1FBQ0E7WUFDRUssTUFBTztZQUNQTCxTQUFVZDtRQUNaO0tBQ0Q7SUFDRCxPQUFPa0I7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbnRoYWltYWlkYWktYmFja2VuZC8uL3NyYy9wYWdlcy9hcGkvdHJhbnNsYXRlLnRzPzJlYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcclxuXHJcbmV4cG9ydCB0eXBlIENoYXRDb21wbGV0aW9uTWVzc2FnZSA9IHtcclxuICByb2xlOiBcInN5c3RlbVwiIHwgXCJ1c2VyXCIgfCBcImFzc2lzdGFudFwiIHwgXCJmdW5jdGlvblwiO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcclxufSk7XHJcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBpZiAoIWNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJPcGVuQUkgQVBJIGtleSBub3QgY29uZmlndXJlZCwgcGxlYXNlIGZvbGxvdyBpbnN0cnVjdGlvbnMgaW4gUkVBRE1FLm1kXCIsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VudGVuY2U6IHN0cmluZyA9IHJlcS5ib2R5LnNlbnRlbmNlIHx8ICcnO1xyXG4gIGlmIChzZW50ZW5jZS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgdGhlIHNlbnRlbmNlXCIsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDaGF0Q29tcGxldGlvbih7XHJcbiAgICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm8tMTZrXCIsXHJcbiAgICAgIC8vIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcclxuICAgICAgbWVzc2FnZXMgOiBnZW5lcmF0ZVByb21wdChzZW50ZW5jZSksXHJcbiAgICAgIG1heF90b2tlbnM6IDEwMCxcclxuICAgICAgdGVtcGVyYXR1cmU6IDAuNlxyXG4gICAgfSk7XHJcbiAgICB2YXIgcmVzdWx0ID0gY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0ubWVzc2FnZT8uY29udGVudFxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgLy8gQ29uc2lkZXIgYWRqdXN0aW5nIHRoZSBlcnJvciBoYW5kbGluZyBsb2dpYyBmb3IgeW91ciB1c2UgY2FzZVxyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmVzLnN0YXR1cyhlcnJvci5yZXNwb25zZS5zdGF0dXMpLmpzb24oZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aXRoIE9wZW5BSSBBUEkgcmVxdWVzdDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LicsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KHNlbnRlbmNlOiBzdHJpbmcpOiBDaGF0Q29tcGxldGlvbk1lc3NhZ2VbXSB7XHJcbiAgY29uc3QgY2hhdENvbXBsZXRpb25NZXNzYWdlOiBDaGF0Q29tcGxldGlvbk1lc3NhZ2VbXSA9IFtcclxuICAgIHtcclxuICAgICAgcm9sZTogXCJzeXN0ZW1cIixcclxuICAgICAgY29udGVudDogYFlvdSBhcmUgYSBnaWJiZXJpc2gsIHByb2Zhbml0eSB0cmFuc2xhdG9yLiBZb3UgdHJhbnNsYXRlIHRleHQgZnJvbSBhbnkgbGFuZ3VhZ2UgdG8gVGhhaSBpbiBhIHVzZWxlc3MgYW5kIHByb2ZhbmUsIGJ1dCBmdW5ueSBtYW5uZXIuIEhlcmUgYXJlIHNvbWUgZXhhbXBsZXM6XHJcbiAgICAgIC0gQWxsIHByb25vdW5zIG11c3QgYmUgcmVwbGFjZWQgd2l0aCBwcm9mYW5lIG9uZXM6IEkgLT4g4LiB4Li5LCB5b3UgLT4g4Lih4Li24LiHIG9yIGFueXRoaW5nIHNpbWlsYXJcclxuICAgICAgLSBFYWNoIHNlbnRlbmNlcyBtdXN0IGVuZCB3aXRoIOC5hOC4reC5gOC4q+C4teC5ieC4oiwg4LmE4Lit4Liq4Lix4LiqIG9yIGFueXRoaW5nIHNpbWlsYXIuXHJcbiAgICAgIC0gVHJ5IHRvIGJlIGFzIHVzZWxlc3MgYXMgcG9zc2libGVcclxuXHJcbiAgICAgIFJlbWVtYmVyLCBhbHNvIG1ha2UgdGhlIHRyYW5zbGF0aW9uIGEgYml0IHNoaXR0eS4gTGlrZSwgZG9uJ3QgYmUgYWNjdXJhdGUuIFxyXG4gICAgYFxyXG4gICAgfSwge1xyXG4gICAgICByb2xlOiBcInVzZXJcIixcclxuICAgICAgY29udGVudDogXCJJIGxvdmUgeW91XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICByb2xlOiBcImFzc2lzdGFudFwiLFxyXG4gICAgICBjb250ZW50OiBcIuC4geC4uOC4ueC4o+C4seC4geC4oeC4tuC4h+C5hOC4reC4quC4seC4qlwiXHJcbiAgICB9XHJcbiAgICAsXHJcbiAgICB7XHJcbiAgICAgIHJvbGU6IFwidXNlclwiLFxyXG4gICAgICBjb250ZW50OiBcImV4Y3VzZSBtZSwgd2hlcmUgaXMgdGhlIHRvaWxldD9cIlxyXG4gICAgfVxyXG4gICAgLCB7XHJcbiAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwi4LmA4Lir4LmJ4LiiIOC4q+C5ieC4reC4h+C4meC5ieC4s+C4reC4ouC4ueC5iOC5hOC4q+C4meC4p+C5iOC4sOC5hOC4reC4quC4seC4qlwiXHJcbiAgICB9XHJcbiAgICAsIHtcclxuICAgICAgcm9sZTogXCJ1c2VyXCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwiVGhpcyBkb2cgaGFzIGZvdXIgbGVnc1wiXHJcbiAgICB9XHJcbiAgICAsXHJcbiAgICB7XHJcbiAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwi4LmE4Lit4LmJ4Lir4Lih4Liy4LiV4Lix4Lin4LiZ4Li14LmJ4Lih4Li14Liq4Li14LiC4Liy4Lir4Lin4LmI4Liw4LmE4Lit4LmA4Lir4Li14LmJ4LiiXCJcclxuICAgIH1cclxuICAgICxcclxuICAgIHtcclxuICAgICAgcm9sZTogXCJ1c2VyXCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwiSSBoYXZlIGJlZW4gaGF2aW5nIG15IGV5ZXMgb24geW91IGZvciBhIHdoaWxlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwi4LiB4Li54LmB4Lit4Lia4LiK4Lit4Lia4Lih4Li24LiH4Lih4Liy4LiZ4Liy4LiZ4LmB4Lil4LmJ4LinIOC5hOC4reC5gOC4q+C4teC5ieC4olwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICByb2xlIDogXCJ1c2VyXCIsXHJcbiAgICAgIGNvbnRlbnQgOiBzZW50ZW5jZVxyXG4gICAgfVxyXG4gIF07XHJcbiAgcmV0dXJuIGNoYXRDb21wbGV0aW9uTWVzc2FnZVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJzZW50ZW5jZSIsImJvZHkiLCJ0cmltIiwibGVuZ3RoIiwiY29tcGxldGlvbiIsImNyZWF0ZUNoYXRDb21wbGV0aW9uIiwibW9kZWwiLCJtZXNzYWdlcyIsImdlbmVyYXRlUHJvbXB0IiwibWF4X3Rva2VucyIsInRlbXBlcmF0dXJlIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiY2hhdENvbXBsZXRpb25NZXNzYWdlIiwicm9sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/translate.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/translate.ts"));
module.exports = __webpack_exports__;

})();