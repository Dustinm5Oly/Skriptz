
if (document.querySelectorAll('.removeBTN')) {
    $removeBTN = document.querySelectorAll('.removeBTN');

    let removeHandler = async (e) => {
        let deleteID = e.target.getAttribute("data-subscription");
        console.log(deleteID)
        let response = await fetch(`/api/service/${deleteID}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            location.reload();
        } else {
            console.log("Deletion failed.")
        }
    }

    $removeBTN.forEach((element)=> {
        element.addEventListener("click", removeHandler)
    })
}