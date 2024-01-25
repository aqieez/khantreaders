import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

    product!: {
        id: number,
        title: string,
        description: string,
        composition: string,
        application: string,
        images: string[]
    } | undefined

    products = [
        {
            id: 1,
            title: 'HMS 80:20 (Heavy Melting Scrap)',
            description: 'HMS 80:20 refers to Heavy Melting Scrap with an 80% iron and 20% steel. This mix provides a balance of ferrous metals suitable for recycling.',
            composition: 'Recognized for its heaviness and durability, HMS 80:20 is commonly sourced from obsolete machinery, construction sites, and industrial equipment.',
            application: ' Widely used in steel production, the HMS 80:20 grade contributes to the circular economy by recycling scrap metals, reducing the demand for primary raw materials.',
            images: ['assets/scrap/hsm.jpeg', 'assets/scrap/hsm-1.jpeg']
        },
        {
            id: 2,
            title: 'Shredded Steel (ISRI Standard 211)',
            description: 'Shredded Steel adhering to ISRI Standard 211 is a widely recognized and standardized form of scrap metal. It undergoes a shredding process, resulting in smaller, uniform pieces.',
            composition: 'It boasts a density of 70 pounds per cubic foot, making it a dense and compact material suitable for various industrial applications.',
            application: 'Ideal for steel manufacturing processes, Shredded Steel ISRI 211 is sought after for its efficiency in melting and recycling, contributing to sustainable practices within the industry.',
            images: ['assets/scrap/shred-steel.jpeg', 'assets/scrap/shred-steel-1.jpeg']
        },
        {
            id: 3,
            title: 'ASCR Triplex (65% Aluminum):',
            description: 'This scrap variant includes a mix of aluminum and other materials, often remaining from cable insulation or connectors.',
            composition: 'ASCR Triplex, with a 65% aluminum content, is an Aluminum Shredded Cables Residue, typically resulting from the recycling process of aluminum cables.',
            application: 'Valued for its aluminum content, ASCR Triplex is used in the production of aluminum alloys and other applications where the recycling of aluminum is beneficial, contributing to resource efficiency and sustainability.',
            images: ['assets/scrap/acsr.jpeg', 'assets/scrap/acsr-1.jpeg']
        },

    ]

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        // Subscribe to route parameter changes
        this.route.params.subscribe(params => {
            // Retrieve the 'id' parameter from the route
            const productId = +params['id']; // Convert it to a number using '+'

            // Find the product with the matching id
            this.product = this.products.find(p => p.id === productId);
        });
        window.scrollTo(0, 0);
    }


}
