class Testimonials {
    constructor (params) {
        // console.log(params);

       this.selector = params.selector;
       this.data = params.data;
       this.isArrowControlsVisible = params.isArrowControlsVisible;
       this.isDotControlsVisible = params.isDotControlsVisible;
       this.maxItems = params.maxItems;
       this.cloneCount = params.cloneCount;
       this.visibilityStrategy = params.visibilityStrategy;

       console.log(this);
    }

    isValidSelector() {
        return true;
    }

    render() {
        if(!this.isValidSelector()) {
            return;
        }

        const HTML = `  <div class="testimonial">
        <div class="view">
            <div class="list">
                <div class="item">
                    <img src="#" alt="Jessica Williams">
                    <div class="name">Jessica Williams</div>
                    <div class="location">Los Angeles, Colifornia</div>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, perferendis excepturi consequatur commodi voluptatem esse. Quam explicabo voluptates corporis vitae.</p>
                </div>
            </div>
        </div>
        <div class="controls">
            <i class="fa fa-angle-left"></i>
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <i class="fa fa-angle-right"></i>
        </div>
    </div>`

    const DOM = document.querySelector(this.selector);
    DOM.innerHTML  = HTML;
    }
}

export { Testimonials }