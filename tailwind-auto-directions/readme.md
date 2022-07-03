# Tailwind  Auto Directions

This plugin helps you to convert your projects into right and left alignment without writing additional code for each direction. Values are controlled by the browser.

### Example
If you want to always set the position of an absolute element based on direction, you should write:
```html 
<div class="absolute left-10 top-10 rtl:right-10">
    Absolute element
</div>
```
But by using start class you can use inset-inline-start. So we write like this
```html 
<div class="absolute start-10 top-10">
    Absolute element
</div>
```
In this way, in direction:rtl the element starts from the right side and in direction:ltr from the left side

### Usable classes
| Class     | Description         |
|-----------|---------------------|
| ps-*      | padding start       |
| pe-*      | padding end         |
| ms-*      | margin start        |
| me-*      | margin end          |
| dir-rtl | direction rtl  |
| dir-ltr | direction ltr   |
| text-start | algin text   |
| text-end | algin text   |
| start-* | inset algin (e.g instead of left:* in direction:ltr)   |
| end-* | inset algin (e.g instead of right:* in direction:ltr)   |
| border-s-* | border start width   |
| border-e-* | border end width   |
| rounded-s-* | border radius start |
| rounded-e-* | border radius end   |
| rounded-ts-* | border radius top start   |
| rounded-te-* | border radius top end   |
| rounded-bs-* | border radius bottom start   |
| rounded-be-* | border radius bottom end   |
| rounded-bs-* | border radius bottom start   |
| rounded-be-* | border radius bottom end   |
| float-start | float inline-start   |
| float-end | float inline-end   |
| clear-start | clear inline-start   |
| clear-end | clear inline-end   |


