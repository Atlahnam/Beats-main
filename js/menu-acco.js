const mesureWidth = item => {
    const screenWidth = $(window).width();
    const container = item.closest(".colors-menu__list");
    const titlesBlocks = container.find(".colors-menu__name");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    
    const isMobile = window.matchMedia("(max-width: 768px").matches;

    if (isMobile) {
        return screenWidth - titlesWidth;
    } else {
        return 500;
    }

}

const closeEveryItemInContainer = container => {
    const items = container.find(".colors-menu__item");
    const content = container.find(".colors-menu__description");

    items.removeClass("active");
    content.width(0);
}

const unblockItem = item => {
    const hiddenContent = item.find(".colors-menu__description");
    const reqWidth = mesureWidth(item);

    item.addClass("active");
    hiddenContent.width(reqWidth);
}

$(".colors-menu__name").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".colors-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".colors-menu__list");

    if (itemOpened) {
        closeEveryItemInContainer(container);
    } else {
        closeEveryItemInContainer(container);
        unblockItem(item);
    }
});

$(".color-menu__close").on("click", e => {
    e.preventDefault();
    closeEveryItemInContainer($('.colors-menu__list'));
})