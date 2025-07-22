(module
  (type (;0;) (func (param i32) (result i32)))
  (type (;1;) (func))
  (type (;2;) (func (result i32)))
  (type (;3;) (func (param i32)))
  (func (;0;) (type 1))
  (func (;1;) (type 2) (result i32)
    global.get 0)
  (func (;2;) (type 0) (param i32) (result i32)
    global.get 0
    local.get 0
    i32.sub
    i32.const -16
    i32.and
    local.tee 0
    global.set 0
    local.get 0)
  (func (;3;) (type 3) (param i32)
    local.get 0
    global.set 0)
  (func (;4;) (type 0) (param i32) (result i32)
    (local i32 i32 i32)
    local.get 0
    i32.const 1
    i32.gt_s
    if  ;; label = @1
      i32.const 2
      local.set 1
      loop  ;; label = @2
        block  ;; label = @3
          block  ;; label = @4
            local.get 1
            local.tee 2
            i32.const 4
            i32.lt_u
            br_if 0 (;@4;)
            local.get 2
            i32.const 1
            i32.and
            i32.eqz
            br_if 1 (;@3;)
            local.get 2
            i32.const 3
            i32.rem_u
            i32.eqz
            br_if 1 (;@3;)
            i32.const 5
            local.set 1
            local.get 2
            i32.const 25
            i32.lt_u
            br_if 0 (;@4;)
            loop  ;; label = @5
              local.get 2
              local.get 1
              i32.rem_u
              i32.eqz
              br_if 2 (;@3;)
              local.get 2
              local.get 1
              i32.const 2
              i32.add
              i32.rem_u
              i32.eqz
              br_if 2 (;@3;)
              local.get 1
              i32.const 6
              i32.add
              local.tee 1
              local.get 1
              i32.mul
              local.get 2
              i32.le_u
              br_if 0 (;@5;)
            end
          end
          local.get 3
          i32.const 1
          i32.add
          local.set 3
        end
        local.get 2
        i32.const 1
        i32.add
        local.set 1
        local.get 0
        local.get 2
        i32.ne
        br_if 0 (;@2;)
      end
    end
    local.get 3)
  (table (;0;) 1 1 funcref)
  (memory (;0;) 258 258)
  (global (;0;) (mut i32) (i32.const 66560))
  (export "a" (memory 0))
  (export "b" (func 0))
  (export "c" (func 4))
  (export "d" (table 0))
  (export "e" (func 3))
  (export "f" (func 2))
  (export "g" (func 1)))
