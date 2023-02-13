function CVDownload(props) {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('/images/Dan Shipp CV Feb 2023.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/images/Dan Shipp CV Feb 2023.pdf';
                alink.click();
            })
        })
    }




    return (

        <nav>
            <button onClick={onButtonClick}>PDF Version</button>
        </nav>

    )
}

export default CVDownload;
