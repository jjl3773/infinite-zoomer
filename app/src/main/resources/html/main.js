"use strict";

function nextAnimationFrame()
{
    return new Promise((resolve, reject) =>
    {
        requestAnimationFrame(resolve);
    });
}


async function main()
{
    const canvas = document.querySelector("#main");
    const ctx = canvas.getContext("2d");

    // TODO: Setup onpointermove, onpointerdown, onpointerup events.
    // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown
    function moveHandler(ev) {

    }
    function init() {
      let el=document.getElementById('target1');
      el.onpointermove = moveHandler;
    }

    while (true)
    {
        // TODO: Ask server for new data
        // TODO: Re-render if there's anything new.

        await nextAnimationFrame();
    }
}

main();