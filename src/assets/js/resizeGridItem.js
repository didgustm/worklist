function resizeGridItem(y= 0){
    const items = document.querySelectorAll('.item'),
                grid = document.querySelector('.lists'),
                rowGap = parseInt(getComputedStyle(grid).getPropertyValue('grid-row-gap')),
                rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    items.forEach(x => {
        const h = x.offsetHeight,
                    rowSpan = Math.ceil((h + rowGap) / (rowGap + rowHeight));
        x.style.gridRowEnd = `span ${rowSpan}`;
    });
}

export { resizeGridItem }