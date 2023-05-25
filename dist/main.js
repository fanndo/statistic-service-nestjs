"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT Authentication',
        description: 'Put **_ONLY_** your JWT Bearer token on textbox below!',
        in: 'header',
    };
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Servicio de Estadisticas')
        .setDescription('Servicio que provee datos de estadisticas')
        .setVersion('1.0')
        .setBasePath('/api')
        .addBearerAuth(options, 'Bearer')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
};
bootstrap();
//# sourceMappingURL=main.js.map