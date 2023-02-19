document.getElementById('apply-bg').addEventListener('click', function () {
    // console.log('bg-button')
    const friends = document.getElementsByClassName("friend");
    // console.log(friends);
    for (const friend of friends) {
        // console.log(friend)
        friend.style.backgroundColor='lightblue'

    }
})
document.getElementById("center-btn").addEventListener('click', function () {
    // console.log('friend center')
    const five = document.getElementById("friend-five");
    five.style.textAlign = 'center';
});
document.getElementById('add-friend').addEventListener('click', function () {
  // console.log('add friend');
  const friendContainer = document.getElementById("friends");
  const friend = document.createElement("div");
  // reuse bg color
    friend.classList.add('friend');
  friend.innerHTML = `
         <h3 class="friends-name">New Friend</h3>
         <p>You are new friend</p>
    `;
  friendContainer.appendChild(friend);
});