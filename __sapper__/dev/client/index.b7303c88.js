import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, a as authenticated, t as text, c as claim_text, b as insert_dev, e as set_data_dev, n as noop, f as detach_dev } from './client.7e00631e.js';

/* src/routes/index.svelte generated by Svelte v3.35.0 */

function create_fragment(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*message*/ ctx[0]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*message*/ ctx[0]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*message*/ 1) set_data_dev(t, /*message*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
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
	validate_slots("Routes", slots, []);
	let message = "";

	onMount(async () => {
		try {
			const response = await fetch("http://localhost:8000/api/user", {
				headers: { "Content-Type": "application/json" },
				credentials: "include"
			});

			const content = await response.json();
			$$invalidate(0, message = `Hi ${content.name}`);
			authenticated.set(true);
		} catch(e) {
			$$invalidate(0, message = "You are not logged in");
			authenticated.set(false);
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ onMount, authenticated, message });

	$$self.$inject_state = $$props => {
		if ("message" in $$props) $$invalidate(0, message = $$props.message);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [message];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjczMDNjODguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xuICAgIGltcG9ydCB7YXV0aGVudGljYXRlZH0gZnJvbSAnLi4vc3RvcmVzL2F1dGgnO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSAnJ1xuXG4gICAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXInLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgbWVzc2FnZSA9IGBIaSAke2NvbnRlbnQubmFtZX1gO1xuICAgICAgICAgICAgYXV0aGVudGljYXRlZC5zZXQodHJ1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnWW91IGFyZSBub3QgbG9nZ2VkIGluJztcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQuc2V0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuPC9zY3JpcHQ+XG5cbnttZXNzYWdlfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozt3QkF3QkMsR0FBTzs7O3FDQUFQLEdBQU87Ozs7OzswREFBUCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXBCQSxPQUFPLEdBQUcsRUFBRTs7Q0FFaEIsT0FBTzs7U0FFTyxRQUFRLFNBQVMsS0FBSyxDQUFDLGdDQUFnQztJQUN6RCxPQUFPLElBQUcsY0FBYyxFQUFFLGtCQUFrQjtJQUM1QyxXQUFXLEVBQUUsU0FBUzs7O1NBR3BCLE9BQU8sU0FBUyxRQUFRLENBQUMsSUFBSTttQkFFbkMsT0FBTyxTQUFTLE9BQU8sQ0FBQyxJQUFJO0dBQzVCLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSTtVQUNqQixDQUFDO21CQUNOLE9BQU8sR0FBRyx1QkFBdUI7R0FDakMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
