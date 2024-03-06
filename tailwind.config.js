tailwind.config = {
    theme: {
      extend: {
        colors: {
          green: '#1BBF00',
          white: '#EFF4FA',
          black: '#141135',
        },
        maxWidth: {
            'container': '1180px',
        },
        fontFamily: {
            'open': ["'Open Sans', sans-serif;"],
            'paprika': ["'Paprika', system-ui;"],
            'quicksand': ['"Quicksand", sans-serif;'],
            'nunito': ['"Nunito", sans-serif;']
        },
        backgroundImage: {
            'banner': "url('./images/banner-bg.png')",
            'element': "url('./images/element.png')",
            'shape1': "url('./images/shape1.jpg')",
            'shape2': "url('./images/shape2.jpg')",
            'shape3': "url('./images/shape3.jpg')",
            'shape4': "url('./images/shape4.jpg')",
        }
      }
    }
  }