function resizeGridItem(){
    const grid = document.querySelector('.lists'),
                items = grid.querySelectorAll('.item'),
                rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
                rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

    items.forEach(x => {
        const h = x.querySelector('button').getBoundingClientRect().height,
                    rowSpan = Math.floor((h + rowGap) / (rowHeight + rowGap));
        x.style.gridRowEnd = `span ${rowSpan}`;
    })
}

export { resizeGridItem }