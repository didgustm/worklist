function resizeGridItem(){
    const items = document.querySelectorAll('.item'),
                grid = document.querySelector('.lists'),
                rowGap = parseInt(getComputedStyle(grid).getPropertyValue('grid-row-gap')),
                rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    items.forEach(x => {
        const h = x.offsetHeight,
                    rowSpan = Math.floor((h+rowGap) / (rowHeight+rowGap));
        x.style.gridRowEnd = `span ${rowSpan}`;
    });
}

export { resizeGridItem }