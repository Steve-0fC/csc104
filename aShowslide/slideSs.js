/* SLIDESHOW IMAGES */

        //Easier and slots each position for each new entry
        //one line with multiple in the same line
        let arr_Fruit = [
        "img_here/img_1.jpg",
        "img_here/img_2.jpg",
        "img_here/brazilian_passion.jpg",
        "img_here/exotic_Passion.jpg",
        "img_here/pineapple_sunglasses_headphones.jpg"
        ];  




        //keep track of current image that is showing
        let currentImageIndex = 0;

        //to show image on page
        function showImage(index){
            //shortcut to img tag
            let imageSlide = document.getElementById("imgSlide");

            //sets img (img file name) to the array location
            imageSlide.src = arr_Fruit[index];
        }


        //move to the prev slide
        function prevSlide(){
            // subtrtact 1 from currentImageIndex (-1)
            currentImageIndex--;

            //below zero
            if (currentImageIndex < 0){
                //stay on one img
                //last - first img loop
                currentImageIndex = arr_Fruit.length - 1;
            }

            //show previous
            showImage(currentImageIndex);
        }

        //move to the next slide
        function nextSlide(){
            //add 1 to cII (+1)
            currentImageIndex++;

            if (currentImageIndex >= arr_Fruit.length){
                //options
                //on last img
                //this loops back around
                currentImageIndex = 0;

            }

            //showes next image
            showImage(currentImageIndex);
        }

        showImage(currentImageIndex);
