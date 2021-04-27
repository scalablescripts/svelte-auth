import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as goto, f as element, t as text, h as space, j as claim_element, k as children, c as claim_text, b as detach_dev, l as claim_space, m as attr_dev, p as add_location, a as insert_dev, q as append_dev, r as set_input_value, u as listen_dev, w as prevent_default, n as noop, x as run_all } from './client.b5a307d3.js';

/* src/routes/login.svelte generated by Svelte v3.35.0 */
const file = "src/routes/login.svelte";

function create_fragment(ctx) {
	let form;
	let h1;
	let t0;
	let t1;
	let input0;
	let t2;
	let input1;
	let t3;
	let button;
	let t4;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			form = element("form");
			h1 = element("h1");
			t0 = text("Please sign in");
			t1 = space();
			input0 = element("input");
			t2 = space();
			input1 = element("input");
			t3 = space();
			button = element("button");
			t4 = text("Sign in");
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			h1 = claim_element(form_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Please sign in");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(form_nodes);

			input0 = claim_element(form_nodes, "INPUT", {
				type: true,
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
			button = claim_element(form_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Sign in");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "h3 mb-3 fw-normal");
			add_location(h1, file, 21, 4, 498);
			attr_dev(input0, "type", "email");
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "placeholder", "Email");
			input0.required = true;
			add_location(input0, file, 23, 4, 553);
			attr_dev(input1, "type", "password");
			attr_dev(input1, "class", "form-control");
			attr_dev(input1, "placeholder", "Password");
			input1.required = true;
			add_location(input1, file, 25, 4, 648);
			attr_dev(button, "class", "w-100 btn btn-lg btn-primary");
			attr_dev(button, "type", "submit");
			add_location(button, file, 27, 4, 752);
			add_location(form, file, 20, 0, 453);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			append_dev(form, h1);
			append_dev(h1, t0);
			append_dev(form, t1);
			append_dev(form, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_dev(form, t2);
			append_dev(form, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_dev(form, t3);
			append_dev(form, button);
			append_dev(button, t4);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[3]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[2]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
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
	validate_slots("Login", slots, []);
	let email = "", password = "";

	const submit = async () => {
		await fetch("http://localhost:8000/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify({ email, password })
		});

		await goto("/");
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$capture_state = () => ({ goto, email, password, submit });

	$$self.$inject_state = $$props => {
		if ("email" in $$props) $$invalidate(0, email = $$props.email);
		if ("password" in $$props) $$invalidate(1, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [email, password, submit, input0_input_handler, input1_input_handler];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

export default Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uMDNmM2MzYzAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtnb3RvfSBmcm9tIFwiQHNhcHBlci9hcHAubWpzXCI7XG5cbiAgICBsZXQgZW1haWwgPSAnJywgcGFzc3dvcmQgPSAnJ1xuXG4gICAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9sb2dpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgZ290bygnLycpO1xuICAgIH1cbjwvc2NyaXB0PlxuXG48Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e3N1Ym1pdH0+XG4gICAgPGgxIGNsYXNzPVwiaDMgbWItMyBmdy1ub3JtYWxcIj5QbGVhc2Ugc2lnbiBpbjwvaDE+XG5cbiAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZW1haWx9IHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkPlxuXG4gICAgPGlucHV0IGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZD5cblxuICAgIDxidXR0b24gY2xhc3M9XCJ3LTEwMCBidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlNpZ24gaW48L2J1dHRvbj5cbjwvZm9ybT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBdUJ1QixHQUFLOzs7d0NBRUwsR0FBUTs7Ozs7Ozs7OzJEQUxDLEdBQU07Ozs7Ozs7eURBR2YsR0FBSztzQ0FBTCxHQUFLOzs7K0RBRUwsR0FBUTt5Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXRCdkIsS0FBSyxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRTs7T0FFdkIsTUFBTTtRQUNGLEtBQUssQ0FBQyxpQ0FBaUM7R0FDekMsTUFBTSxFQUFFLE1BQU07R0FDZCxPQUFPLElBQUcsY0FBYyxFQUFFLGtCQUFrQjtHQUM1QyxXQUFXLEVBQUUsU0FBUztHQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FDaEIsS0FBSyxFQUNMLFFBQVE7OztRQUlWLElBQUksQ0FBQyxHQUFHOzs7Ozs7Ozs7O0VBT0MsS0FBSzs7Ozs7RUFFTCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
