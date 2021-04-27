import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, g as goto, f as element, t as text, h as space, j as claim_element, k as children, c as claim_text, e as detach_dev, l as claim_space, m as attr_dev, p as add_location, a as insert_dev, q as append_dev, r as set_input_value, u as listen_dev, w as prevent_default, n as noop, x as run_all } from './client.e6894067.js';

/* src/routes/register.svelte generated by Svelte v3.35.0 */
const file = "src/routes/register.svelte";

function create_fragment(ctx) {
	let form;
	let h1;
	let t0;
	let t1;
	let input0;
	let t2;
	let input1;
	let t3;
	let input2;
	let t4;
	let button;
	let t5;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			form = element("form");
			h1 = element("h1");
			t0 = text("Please register");
			t1 = space();
			input0 = element("input");
			t2 = space();
			input1 = element("input");
			t3 = space();
			input2 = element("input");
			t4 = space();
			button = element("button");
			t5 = text("Submit");
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			h1 = claim_element(form_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Please register");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(form_nodes);

			input0 = claim_element(form_nodes, "INPUT", {
				class: true,
				placeholder: true,
				required: true
			});

			t2 = claim_space(form_nodes);

			input1 = claim_element(form_nodes, "INPUT", {
				type: true,
				class: true,
				placeholder: true,
				required: true
			});

			t3 = claim_space(form_nodes);

			input2 = claim_element(form_nodes, "INPUT", {
				type: true,
				class: true,
				placeholder: true,
				required: true
			});

			t4 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t5 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "h3 mb-3 fw-normal");
			add_location(h1, file, 21, 4, 503);
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "placeholder", "Name");
			input0.required = true;
			add_location(input0, file, 23, 4, 559);
			attr_dev(input1, "type", "email");
			attr_dev(input1, "class", "form-control");
			attr_dev(input1, "placeholder", "Email");
			input1.required = true;
			add_location(input1, file, 25, 4, 639);
			attr_dev(input2, "type", "password");
			attr_dev(input2, "class", "form-control");
			attr_dev(input2, "placeholder", "Password");
			input2.required = true;
			add_location(input2, file, 27, 4, 734);
			attr_dev(button, "class", "w-100 btn btn-lg btn-primary");
			attr_dev(button, "type", "submit");
			add_location(button, file, 29, 4, 838);
			add_location(form, file, 20, 0, 458);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			append_dev(form, h1);
			append_dev(h1, t0);
			append_dev(form, t1);
			append_dev(form, input0);
			set_input_value(input0, /*name*/ ctx[0]);
			append_dev(form, t2);
			append_dev(form, input1);
			set_input_value(input1, /*email*/ ctx[1]);
			append_dev(form, t3);
			append_dev(form, input2);
			set_input_value(input2, /*password*/ ctx[2]);
			append_dev(form, t4);
			append_dev(form, button);
			append_dev(button, t5);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[4]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[5]),
					listen_dev(input2, "input", /*input2_input_handler*/ ctx[6]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[3]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 1 && input0.value !== /*name*/ ctx[0]) {
				set_input_value(input0, /*name*/ ctx[0]);
			}

			if (dirty & /*email*/ 2 && input1.value !== /*email*/ ctx[1]) {
				set_input_value(input1, /*email*/ ctx[1]);
			}

			if (dirty & /*password*/ 4 && input2.value !== /*password*/ ctx[2]) {
				set_input_value(input2, /*password*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Register", slots, []);
	let name = "", email = "", password = "";

	const submit = async () => {
		await fetch("http://localhost:8000/api/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, password })
		});

		await goto("/login");
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Register> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		name = this.value;
		$$invalidate(0, name);
	}

	function input1_input_handler() {
		email = this.value;
		$$invalidate(1, email);
	}

	function input2_input_handler() {
		password = this.value;
		$$invalidate(2, password);
	}

	$$self.$capture_state = () => ({ goto, name, email, password, submit });

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("email" in $$props) $$invalidate(1, email = $$props.email);
		if ("password" in $$props) $$invalidate(2, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		name,
		email,
		password,
		submit,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler
	];
}

class Register extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Register",
			options,
			id: create_fragment.name
		});
	}
}

export default Register;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuODI0N2U3YWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcmVnaXN0ZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtnb3RvfSBmcm9tIFwiQHNhcHBlci9hcHAubWpzXCI7XG5cbiAgICBsZXQgbmFtZSA9ICcnLCBlbWFpbCA9ICcnLCBwYXNzd29yZCA9ICcnXG5cbiAgICBjb25zdCBzdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgZ290bygnL2xvZ2luJyk7XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD17c3VibWl0fT5cbiAgICA8aDEgY2xhc3M9XCJoMyBtYi0zIGZ3LW5vcm1hbFwiPlBsZWFzZSByZWdpc3RlcjwvaDE+XG5cbiAgICA8aW5wdXQgYmluZDp2YWx1ZT17bmFtZX0gY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiByZXF1aXJlZD5cblxuICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtlbWFpbH0gdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQ+XG5cbiAgICA8aW5wdXQgYmluZDp2YWx1ZT17cGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cInctMTAwIGJ0biBidG4tbGcgYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG48L2Zvcm0+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0F1QnVCLEdBQUk7OztxQ0FFSixHQUFLOzs7d0NBRUwsR0FBUTs7Ozs7Ozs7OzsyREFQQyxHQUFNOzs7Ozs7O3VEQUdmLEdBQUk7cUNBQUosR0FBSTs7O3lEQUVKLEdBQUs7c0NBQUwsR0FBSzs7OytEQUVMLEdBQVE7eUNBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F4QnZCLElBQUksR0FBRyxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRTs7T0FFbEMsTUFBTTtRQUNGLEtBQUssQ0FBQyxvQ0FBb0M7R0FDNUMsTUFBTSxFQUFFLE1BQU07R0FDZCxPQUFPLElBQUcsY0FBYyxFQUFFLGtCQUFrQjtHQUM1QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FDaEIsSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFROzs7UUFJVixJQUFJLENBQUMsUUFBUTs7Ozs7Ozs7OztFQU9KLElBQUk7Ozs7O0VBRUosS0FBSzs7Ozs7RUFFTCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
