import { create } from 'express-handlebars';

const init_hbs = () => {

    const hbs = create({
        defaultLayout: 'main',
        extname: '.hbs',
        encoding: 'utf-8',
        layoutsDir: './views/layouts',
        partialsDir: './views/partials',
        
    });

    return hbs;
}

export default init_hbs();
