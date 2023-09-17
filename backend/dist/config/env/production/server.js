"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    url: env('RENDER_EXTERNAL_URL'),
    dirs: {
        public: '/data/public',
    },
});
