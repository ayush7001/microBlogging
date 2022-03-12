import React from 'react';
import blogImage from '../../assets/images/blog-card.jpg';
import './component/blog.css'
class ViewBlog extends React.Component {
    render() {
        return (
            <section className='blog-section container'>
                <div className='blog-banner' style={{backgroundImage: `url(${blogImage})`}}></div>
                <h1>Blog Title</h1>
                <div className='blog-content'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ex nisl. Vestibulum posuere erat quam, quis porttitor tortor lacinia vel. Nunc augue nulla, dapibus sit amet velit eu, pretium accumsan tortor. Nullam nibh ante, pharetra pulvinar ultricies vitae, suscipit sed tellus. In consectetur a enim vitae facilisis. Duis nec urna elit. Suspendisse tincidunt consequat justo nec feugiat. Morbi bibendum libero non libero vulputate, id fringilla lacus lacinia. Maecenas posuere et tortor vitae tempor. Aliquam non consectetur nisi. Vestibulum in mattis est, non suscipit ligula. Maecenas fermentum sed lectus sed malesuada. Suspendisse pharetra magna eget metus vehicula lacinia. Donec eget justo non augue cursus congue. Phasellus quis tellus eget eros sagittis gravida. Phasellus tempor mattis magna, eu blandit sapien egestas eget.

Sed id enim id sapien ultricies eleifend et quis lorem. Curabitur at nulla eu nunc interdum malesuada. Integer porta erat ac egestas laoreet. Fusce efficitur feugiat quam. Ut vel nunc a lectus ornare dapibus sit amet ut nibh. Proin fermentum justo vitae metus suscipit, quis vestibulum neque laoreet. Phasellus eget dui gravida, pharetra lacus a, suscipit metus. Sed vel lobortis arcu. Donec sit amet sapien rhoncus erat semper vulputate. Proin rutrum, leo id viverra sollicitudin, lorem leo facilisis purus, eu porttitor augue felis at velit. Phasellus suscipit ex sit amet ante accumsan, non porttitor est consectetur. Vivamus blandit ullamcorper mi quis semper.

Pellentesque lectus metus, aliquam vel est feugiat, vehicula ultricies quam. Nunc fringilla ex aliquet est mollis, ut placerat nibh malesuada. Nunc sed lectus vel metus consectetur hendrerit. Donec eleifend commodo leo, vel tincidunt nibh dapibus sed. Vestibulum finibus placerat risus, non varius mauris fermentum quis. Vestibulum egestas est massa, at malesuada purus dapibus vitae. Nullam non erat pellentesque, blandit orci at, laoreet lectus. Vivamus at fermentum eros. Quisque porttitor, erat nec vestibulum feugiat, augue urna sagittis lectus, ut lobortis est justo mattis ligula. Fusce dapibus ex libero, non sodales libero pretium vitae. Aenean elementum, quam a molestie sagittis, purus sapien vestibulum massa, sit amet luctus lorem magna feugiat arcu. Praesent ut vehicula lectus. Pellentesque metus nunc, feugiat ac quam at, laoreet tincidunt magna. Aenean interdum magna eget massa gravida venenatis. Cras ornare vestibulum sagittis. Curabitur vitae lorem semper, porttitor tortor vehicula, laoreet velit.

Ut odio nisi, lacinia id mattis eget, laoreet vitae magna. Nulla condimentum posuere ante, feugiat vehicula ex pulvinar nec. Aenean pellentesque interdum libero, eu malesuada est dictum id. Nunc eget consectetur nunc, ut bibendum enim. Morbi vestibulum mi nec metus fermentum tempor. Aliquam in erat non orci luctus scelerisque. Vestibulum tincidunt pharetra enim, sit amet dapibus risus egestas nec. Aenean nec dolor velit. Proin vitae commodo ex.

Fusce ac aliquet metus, ac tempus erat. Fusce et odio tincidunt ex auctor porttitor eu ac lorem. Maecenas commodo ante eu leo blandit suscipit euismod in metus. Nam tempus, magna eu vehicula commodo, diam dui consequat metus, commodo imperdiet elit leo accumsan sapien. Curabitur finibus erat ex, id feugiat arcu cursus in. Mauris sit amet purus et nulla aliquet pretium vitae sit amet felis. Maecenas vel nulla in ex semper porta. Nullam vitae pharetra orci. Phasellus tristique, neque at consequat accumsan, augue magna dignissim turpis, tempus semper sem dolor et lectus. Vestibulum aliquet arcu eu dolor placerat sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
            </section>
        )
    }
}

export default ViewBlog;