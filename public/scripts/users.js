// Client facing scripts here
$(() => {
  $('#fetch-users').on('click', () => {
    let test = "rings"
    const appID = "Y9X4HG-X95U8E2PJ6"
    $.ajax({
	async: true,
	crossDomain: true,
	url: `http://api.wolframalpha.com/v1/simple?appid=${appID}&i=What+airplanes+are+flying+overhead%3F`,
	method: 'GET',
})
    .done((response) => {
      // const $usersList = $('#users');
      // $usersList.empty();
console.log(response)
      // for(const user of response.users) {
      //   $(`<li class="user">`).text(user.name).appendTo($usersList);
      // }
    });
  });
});
