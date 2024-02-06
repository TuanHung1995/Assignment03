// document.addEventListener('DOMContentLoaded', function () {
//   if (window.innerWidth > 1024) {
//     initializeScript()
//   }

//   window.addEventListener('resize', function () {
//     // Kiểm tra lại kích thước màn hình khi có sự kiện thay đổi
//     if (window.innerWidth >= 1024) {
//       initializeScript()
//     }
//   })

//   const emailForm = document.getElementById('emailForm')
//   const infoContainer = document.getElementById('inforContainer')
//   const submitButton = document.getElementById('submitButton')

//   submitButton.addEventListener('click', function (event) {
//     // Ngăn chặn hành vi mặc định của nút submit
//     event.preventDefault()

//     // Lấy giá trị email từ input
//     const emailInput = document.getElementById('exampleFormControlInput1')
//     const emailValue = emailInput.value

//     // Kiểm tra định dạng email sử dụng Regex
//     const regex =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     const isValidEmail = regex.test(emailValue)

//     if (isValidEmail) {
//       // Ẩn form và hiển thị thông tin cá nhân
//       emailForm.classList.add('hidden')
//       infoContainer.classList.remove('hidden')
//     } else {
//       // Hiển thị thông báo lỗi nếu email không hợp lệ
//       alert('Email không hợp lệ. Vui lòng nhập lại.')
//     }
//   })

//   function showButton(skill) {
//     const viewMoreButton = skill.querySelector('.view-more')
//     viewMoreButton.style.display = 'block'
//   }

//   function hideButton(skill) {
//     const viewMoreButton = skill.querySelector('.view-more')
//     viewMoreButton.style.display = 'none'
//   }

//   function toggleContent(button) {
//     const skill = button.closest('.skill')
//     const content = skill.querySelector('.content')

//     if (content.classList.contains('hidden')) {
//       content.classList.remove('hidden')
//       button.textContent = 'View Less'
//     } else {
//       content.classList.add('hidden')
//       button.textContent = 'View More'
//     }
//   }

//   const skillItems = document.querySelectorAll('.skill')

//   skillItems.forEach((skill) => {
//     const viewMoreButton = skill.querySelector('.view-more')

//     skill.addEventListener('mouseover', function () {
//       showButton(viewMoreButton)
//     })

//     skill.addEventListener('mouseout', function () {
//       hideButton(viewMoreButton)
//     })

//     viewMoreButton.addEventListener('click', function () {
//       toggleContent(viewMoreButton)
//     })
//   })
// })

document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra kích thước màn hình khi tải trang
  if (window.innerWidth >= 1024) {
    initializeScript()
  }

  // Lắng nghe sự kiện thay đổi kích thước màn hình
  window.addEventListener('resize', function () {
    // Kiểm tra lại kích thước màn hình khi có sự kiện thay đổi
    if (window.innerWidth >= 1024) {
      initializeScript()
    }
  })

  function initializeScript() {
    const emailForm = document.getElementById('emailForm')
    const infoContainer = document.getElementById('inforContainer')
    const submitButton = document.getElementById('submitButton')

    submitButton.addEventListener('click', function (event) {
      event.preventDefault()

      const emailInput = document.getElementById('exampleFormControlInput1')
      const emailValue = emailInput.value

      const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const isValidEmail = regex.test(emailValue)

      if (isValidEmail) {
        emailForm.classList.add('hidden')
        infoContainer.classList.remove('hidden')
      } else {
        alert('Email không hợp lệ. Vui lòng nhập lại.')
      }
    })

    function showButton(skill) {
      const viewMoreButton = skill.querySelector('.view-more')
      viewMoreButton.style.display = 'block'
    }

    function hideButton(skill) {
      const viewMoreButton = skill.querySelector('.view-more')
      viewMoreButton.style.display = 'none'
    }

    function toggleContent(button) {
      const skill = button.closest('.skill')
      const content = skill.querySelector('.content')

      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden')
        button.textContent = 'View Less'
      } else {
        content.classList.add('hidden')
        button.textContent = 'View More'
      }
    }

    const skillItems = document.querySelectorAll('.skill')

    skillItems.forEach((skill) => {
      const viewMoreButton = skill.querySelector('.view-more')

      skill.addEventListener('mouseover', function () {
        showButton(viewMoreButton)
      })

      skill.addEventListener('mouseout', function () {
        hideButton(viewMoreButton)
      })

      viewMoreButton.addEventListener('click', function () {
        toggleContent(viewMoreButton)
      })
    })
  }
})
