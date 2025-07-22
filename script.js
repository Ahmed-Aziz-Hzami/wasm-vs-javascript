import initWasmModule from './wasm_module.js';

document.getElementById('runButton').addEventListener('click', () => {
  const timeSpanWasm = document.getElementById('wasm-time');
  const countSpanWasm = document.getElementById('wasm-prime-count');
  const timeSpanJs = document.getElementById('js-time');
  const countSpanJs = document.getElementById('js-prime-count');

  const limit = 10000000;
  const jsStart = performance.now();



  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }

  function countPrimes(limit) {
    let count = 0;
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
    return count;
  }
  
  function byJS() {
    setTimeout(() => {
      const jsCount = countPrimes(limit);
      const jsEnd = performance.now();
      const jsTime = jsEnd - jsStart;
  
      timeSpanJs.innerText = `${jsTime.toFixed(2)} ms`;
      countSpanJs.innerText =jsCount.toString()
    }, 0);
  }

  function byWASM (Module) {
    const wasmStart = performance.now();
    const wasmCount = Module._count_primes(limit);
    const wasmEnd = performance.now();
    const wasmTime = wasmEnd - wasmStart;

    timeSpanWasm.innerText = `${wasmTime.toFixed(2)} ms`;
    countSpanWasm.innerText =wasmCount.toString()
  
  }

  initWasmModule().then(Module => {
    byJS();
    byWASM(Module);
  });
});
