
                /*let image1 = "img#1.jpg";
        let image2 = "img#2.jpg";
        let image3 = "img#3.jpg";/*next slide*/


        //Easier and slots each position for eachj new entry
        //one line with multiple in the same line
        let TMNTchrs = [
        "img_1.jpg",
        "img_2.jpg",
        "img_3.jpg",
        "gojo.jpg"
        ];  




        //keep track of current image that is showing
        let currentImageIndex = 0;

        //to show image on page
        function showImage(index){
            //shortcut to img tag
            let imageSlide = document.getElementById("imgSlide");

            //sets img (img file name) to the array location
            imageSlide.src = TMNTchrs[index];
        }


        //move to the prev slide
        function prevSlide(){
            // subtrtact 1 from currentImageIndex (-1)
            currentImageIndex--;

            //below zero
            if (currentImageIndex < 0){
                //stay on one img
                //currentImageIndex =0;

                //last - first img loop
                currentImageIndex = TMNTchrs.length - 1;
            }

            //show previous
            showImage(currentImageIndex);
        }

        //move to the next slide
        function nextSlide(){
            //add 1 to cII (+1)
            currentImageIndex++;

            if (currentImageIndex >= TMNTchrs.length){
                //options
                //on last img
                // currentImageIndex = TMNTchrs.length - 1;

                //this loops back around
                currentImageIndex = 0;

            }

            //showes next image
            showImage(currentImageIndex);
        }

        showImage(currentImageIndex);
