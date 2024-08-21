module.exports=api=>{
  const isTest= api.env('test');
  api.cache(true);
return{
  plugins: ["@babel/syntax-dynamic-import"],
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isTest ? 'commonjs': false,
      }
    ]
  ]
}
}
