<template>
  <div class="w-screen h-screen justify-center items-center flex">
    <!-- put images in a 4x4 grid -->
    <div class="w-[50%] grid grid-cols-2">
      <div class="draggable">
        <img src="/img/split/coup3.jpg" class="w-full" alt="" srcset="" />
      </div>

      <div class="draggable">
        <img src="/img/split/coup2.jpg" class="w-full" alt="" srcset="" />
      </div>

      <div class="draggable">
        <img src="/img/split/coup1.jpg" class="w-full" alt="" srcset="" />
      </div>

      <div class="draggable">
        <img src="/img/split/coup4.jpg" class="w-full" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
import interact from "interactjs";
export default {
  methods: {
    initDragger() {
      // target elements with the "draggable" class
      interact(".draggable").draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
          }),
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
          // call this function on every dragmove event
          move: dragMoveListener,

          // call this function on every dragend event
          end(event) {
            var textEl = event.target.querySelector("p");

            textEl &&
              (textEl.textContent =
                "moved a distance of " +
                Math.sqrt(
                  (Math.pow(event.pageX - event.x0, 2) +
                    Math.pow(event.pageY - event.y0, 2)) |
                    0
                ).toFixed(2) +
                "px");
          },
        },
      });

      function dragMoveListener(event) {
        var target = event.target;
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        // translate the element
        target.style.transform = "translate(" + x + "px, " + y + "px)";

        // update the posiion attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      }

      // this function is used later in the resizing and gesture demos
      window.dragMoveListener = dragMoveListener;
    },
  },
  mounted() {
    this.initDragger();
  },
};
</script>
